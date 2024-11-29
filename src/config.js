const config = {
    development: {
        API_URL: 'http://localhost:5000/api'
    },
    production: {
        API_URL: 'https://yourdomain.com/api'  // Change this to your actual domain
    }
};

const environment = process.env.NODE_ENV || 'development';
export const API_BASE_URL = config[environment].API_URL;
