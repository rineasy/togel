import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary mb-6">Kebijakan Privasi</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">1. Informasi yang Kami Kumpulkan</h2>
        <p>Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, termasuk:</p>
        <ul>
          <li>Informasi kontak (seperti nama dan alamat email)</li>
          <li>Informasi yang Anda berikan saat membuat akun</li>
          <li>Informasi tentang perangkat dan penggunaan situs web kami</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">2. Penggunaan Informasi</h2>
        <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
        <ul>
          <li>Menyediakan dan memelihara layanan kami</li>
          <li>Meningkatkan dan mengembangkan layanan kami</li>
          <li>Berkomunikasi dengan Anda tentang layanan kami</li>
          <li>Melindungi hak dan kepentingan kami</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">3. Keamanan Data</h2>
        <p>Kami mengambil langkah-langkah yang wajar untuk melindungi informasi Anda dari akses yang tidak sah atau pengungkapan. Namun, tidak ada sistem yang sepenuhnya aman, dan kami tidak dapat menjamin keamanan informasi Anda.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">4. Cookie dan Teknologi Serupa</h2>
        <p>Kami menggunakan cookie dan teknologi serupa untuk mengumpulkan informasi tentang penggunaan layanan kami dan untuk meningkatkan pengalaman pengguna.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">5. Perubahan Kebijakan Privasi</h2>
        <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting kebijakan baru di halaman ini.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">6. Hubungi Kami</h2>
        <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui:</p>
        <ul>
          <li>Email: support@lapaktoto.com</li>
          <li>Live Chat: Tersedia 24/7</li>
        </ul>
      </section>

      <div className="text-sm opacity-75 mt-8">
        Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
