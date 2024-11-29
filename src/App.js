import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LatestDraws from './components/LatestDraws';
import MarketGrid from './components/MarketGrid';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import SEO from './components/SEO';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-300" data-theme="luxury">
        <SEO />
        <Header />
        <Breadcrumbs />
        <Switch>
          <Route exact path="/">
            <SEO 
              title="LAPAKTOTO: Platform Prediksi Togel Terlengkap & Terpercaya"
              description="LAPAKTOTO adalah platform prediksi togel terpercaya dengan tingkat akurasi tinggi. Dapatkan prediksi SGP, HK, dan Sidney setiap hari dengan update terbaru."
              keywords="lapaktoto, prediksi togel hari ini, togel sgp, togel hk, togel sidney, prediksi jitu"
            />
            <main className="container mx-auto px-4 py-8">
              <h1 className="text-2xl font-bold mb-6 text-primary">Status Pasaran Togel</h1>
              <MarketGrid />
              <h2 className="text-2xl font-bold my-6 text-primary">Prediksi Togel Hari Ini</h2>
              <section className="mb-8">
                <div className="flex justify-between items-center mb-6">
                </div>
                <LatestDraws />
              </section>
            </main>
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:slug">
            <BlogPostPage />
          </Route>
          <Route path="/privacy-policy">
            <SEO 
              title="Kebijakan Privasi | LAPAKTOTO"
              description="Kebijakan privasi LAPAKTOTO - Pelajari bagaimana kami melindungi data dan informasi pribadi Anda. Komitmen kami untuk keamanan dan privasi pengguna."
              keywords="kebijakan privasi lapaktoto, keamanan data togel, privasi pengguna"
            />
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-of-service">
            <SEO 
              title="Syarat dan Ketentuan | LAPAKTOTO"
              description="Syarat dan ketentuan LAPAKTOTO - Informasi lengkap tentang aturan penggunaan layanan prediksi togel kami. Baca sebelum menggunakan layanan."
              keywords="syarat dan ketentuan lapaktoto, aturan togel online, ketentuan layanan"
            />
            <TermsOfService />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
