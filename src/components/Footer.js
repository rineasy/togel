import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="footer p-10">
          {/* Brand Section */}
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">PREDIKSI LAPAKTOTO</span>
            <p className="opacity-70 mt-2">Predictions & Results Platform<br/>Established 2024</p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="footer-title">Quick Links</span>
            <a href="/home" className="link link-hover">Home</a>
            <a href="https://japin.xyz/pola" rel='noopener noreferrer' target='_blank' className="link link-hover">Slot Gacor</a>
            <a href="https://japin.xyz/Promosi" rel='noopener noreferrer' target='_blank' className="link link-hover">Promosi</a>
            <a href="https://japin.xyz/menang" rel='noopener noreferrer' target='_blank' className="link link-hover">Bukti JP</a>
          </div>

          {/* Markets */}
          <div>
            <span className="footer-title">Markets</span>
            <a href="https://lapakdana.com/?content=hasil&pid=SY" rel='noopener noreferrer' target='_blank' className="link link-hover">Sydney Pools</a>
            <a href="https://lapakdana.com/?content=hasil&pid=SG" rel='noopener noreferrer' target='_blank' className="link link-hover">Singapore Pools</a>
            <a href="https://lapakdana.com/?content=hasil&pid=HK" rel='noopener noreferrer' target='_blank' className="link link-hover">Hongkong Pools</a>
            <a href="https://lapakdana.com/?content=hasil&pid=TW" rel='noopener noreferrer' target='_blank' className="link link-hover">Taiwan Pools</a>
          </div>

          {/* Contact */}
          <div>
            <span className="footer-title">Contact</span>
            <a href="https://lapakdana.com/?content=cms&page=hubungi" rel='noopener noreferrer' target='_blank' className="link link-hover">Contact Us</a>
            <a href="https://lapakdana.com/?content=cms&page=bantuan" rel='noopener noreferrer' target='_blank' className="link link-hover">FAQ</a>
            <a href="https://jivo.chat/2aqDRgBXwn" rel='noopener noreferrer' target='_blank' className="link link-hover">Support</a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom border-t border-base-300 py-4 text-sm text-center">
          <p className="opacity-75">
            {new Date().getFullYear()} LAPAKTOTO. All rights reserved. 
            <a href="/privacy-policy" className="link link-hover mx-2">Privacy Policy</a>|
            <a href="/terms-of-service" className="link link-hover mx-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
