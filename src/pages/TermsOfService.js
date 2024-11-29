import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary mb-6">Syarat dan Ketentuan</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">1. Penerimaan Syarat</h2>
        <p>Dengan mengakses dan menggunakan layanan ini, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian apa pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">2. Kelayakan</h2>
        <p>Untuk menggunakan layanan kami, Anda harus:</p>
        <ul>
          <li>Berusia minimal 21 tahun</li>
          <li>Memberikan informasi yang akurat dan lengkap saat mendaftar</li>
          <li>Mematuhi semua hukum dan peraturan yang berlaku</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">3. Akun Pengguna</h2>
        <p>Anda bertanggung jawab untuk:</p>
        <ul>
          <li>Menjaga kerahasiaan informasi akun Anda</li>
          <li>Membatasi akses ke akun Anda</li>
          <li>Semua aktivitas yang terjadi di bawah akun Anda</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">4. Penggunaan Layanan</h2>
        <p>Anda setuju untuk tidak:</p>
        <ul>
          <li>Menggunakan layanan untuk tujuan ilegal</li>
          <li>Melanggar hak kekayaan intelektual</li>
          <li>Menyebarkan malware atau kode berbahaya</li>
          <li>Mengganggu atau merusak layanan</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">5. Pembatasan Tanggung Jawab</h2>
        <p>Kami tidak bertanggung jawab atas:</p>
        <ul>
          <li>Kerugian yang timbul dari penggunaan layanan</li>
          <li>Keakuratan informasi yang disediakan</li>
          <li>Gangguan atau ketidaktersediaan layanan</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">6. Perubahan Layanan</h2>
        <p>Kami berhak untuk:</p>
        <ul>
          <li>Mengubah atau menghentikan layanan kapan saja</li>
          <li>Memodifikasi syarat dan ketentuan ini</li>
          <li>Menolak layanan kepada siapa pun</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">7. Hukum yang Berlaku</h2>
        <p>Syarat dan ketentuan ini diatur oleh hukum yang berlaku, dan setiap perselisihan akan diselesaikan di bawah yurisdiksi yang sesuai.</p>
      </section>

      <div className="text-sm opacity-75 mt-8">
        Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </div>
  );
};

export default TermsOfService;
