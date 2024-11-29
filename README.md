# LAPAKTOTO - Deployment Guide

This guide will help you deploy the LAPAKTOTO application on a VPS (Virtual Private Server).

## Prerequisites

- A VPS running Ubuntu 20.04 or later
- Domain name pointed to your VPS IP
- SSH access to your VPS
- Node.js 16+ installed
- MongoDB 4.4+ installed
- PM2 for process management
- Nginx for reverse proxy

## Installation Steps

### 1. Initial Server Setup

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 16.x
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -y pm2@latest -g

# Install Nginx
sudo apt install -y nginx

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

### 2. Clone and Setup Application

```bash
# Create application directory
mkdir -p /var/www/lapaktoto
cd /var/www/lapaktoto

# Clone repository (replace with your repository URL)
git clone https://your-repository-url.git .

# Install dependencies
npm install

# Build frontend
cd frontend
npm install
npm run build
cd ..

# Create environment file
cp .env.example .env
```

### 3. Configure Environment Variables

Edit the `.env` file:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://localhost:27017/prediksi
# Add any other necessary environment variables
```

### 4. Setup PM2

Create `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'lapaktoto',
    script: 'backend/server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    }
  }]
};
```

Start the application:

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 5. Configure Nginx

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/lapaktoto
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/lapaktoto /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6. Setup SSL with Certbot

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### 7. MongoDB Backup Setup (Optional)

Create a backup script:

```bash
mkdir /var/backups/mongodb
nano /root/backup-mongo.sh
```

Add the following content:

```bash
#!/bin/bash
DATE=$(date +"%Y%m%d")
BACKUP_DIR="/var/backups/mongodb"

# Create backup
mongodump --out "$BACKUP_DIR/$DATE"

# Keep only last 7 days of backups
find $BACKUP_DIR/* -type d -mtime +7 -exec rm -rf {} +
```

Make it executable and add to crontab:

```bash
chmod +x /root/backup-mongo.sh
crontab -e

# Add this line to run backup daily at 3 AM
0 3 * * * /root/backup-mongo.sh
```

## Maintenance

### Updating the Application

```bash
cd /var/www/lapaktoto
git pull
npm install
cd frontend
npm install
npm run build
cd ..
pm2 reload all
```

### Monitoring

```bash
# Monitor application logs
pm2 logs

# Monitor application status
pm2 status

# Monitor system resources
htop

# Monitor Nginx access logs
sudo tail -f /var/log/nginx/access.log

# Monitor Nginx error logs
sudo tail -f /var/log/nginx/error.log
```

### Security Recommendations

1. Enable UFW firewall:
```bash
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw enable
```

2. Configure fail2ban:
```bash
sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

3. Regular system updates:
```bash
sudo apt update && sudo apt upgrade -y
```

## Troubleshooting

1. If the application isn't starting:
   - Check PM2 logs: `pm2 logs`
   - Verify environment variables: `cat .env`
   - Check Node.js version: `node -v`

2. If MongoDB isn't connecting:
   - Check MongoDB status: `sudo systemctl status mongod`
   - Verify MongoDB connection: `mongo`
   - Check MongoDB logs: `sudo tail -f /var/log/mongodb/mongod.log`

3. If Nginx isn't working:
   - Check Nginx status: `sudo systemctl status nginx`
   - Test Nginx configuration: `sudo nginx -t`
   - Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`

## Support

For additional support or questions, please contact:
Telegram - @kitaoverdose
## License

This project is licensed under the MIT License - see the LICENSE file for details.
