import React, { useState, useMemo } from 'react';
import BlogPost from '../components/BlogPost';
import SEO from '../components/SEO';

// Move blogPosts outside the component
const blogPosts = [
  {
    title: 'Cara Jitu Prediksi Togel dengan Analisis Data',
    excerpt: 'Pelajari teknik analisis data untuk meningkatkan akurasi prediksi togel Anda. Artikel ini membahas metode statistik dan pola yang dapat membantu dalam membuat prediksi.',
    slug: 'cara-jitu-prediksi-togel',
    date: '2024-01-15',
    image: 'https://api.shimage.cloud/uploads/cd68107d-707b-4372-bb98-482e02e64ff0-shimage-cloud.jpg',
    tags: ['prediksi', 'analisis', 'tips']
  },
  {
    title: 'Tips Memilih Pasaran Togel Terpercaya',
    excerpt: 'Panduan lengkap untuk memilih pasaran togel yang aman dan terpercaya. Kenali ciri-ciri pasaran togel resmi dan hindari penipuan.',
    slug: 'tips-memilih-pasaran-togel',
    date: '2024-01-14',
    image: 'https://api.shimage.cloud/uploads/0fae87e2-0fd6-4f1e-a500-48a2ee8a32d1-shimage-cloud.jpg',
    tags: ['pasaran', 'keamanan', 'tips']
  },
  {
    title: 'Strategi Jitu Menang Togel dari Para Master',
    excerpt: 'Para master togel memiliki strategi khusus dalam meningkatkan peluang kemenangan. Mari kita pelajari beberapa strategi jitu yang sering digunakan.',
    slug: 'strategi-menang-togel',
    date: '2024-01-13',
    image: 'https://api.shimage.cloud/uploads/928cd02f-83ee-40cf-8f49-929988dcc20e-shimage-cloud.jpg',
    tags: ['strategi', 'master togel', 'tips']
  }
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState('semua');
  const postsPerPage = 6;

  // Get unique tags from all blog posts
  const allTags = useMemo(() => {
    const tags = new Set(blogPosts.flatMap(post => post.tags));
    return ['semua', ...Array.from(tags)];
  }, []); // No dependencies needed as blogPosts is now constant

  // Filter posts by selected tag
  const filteredPosts = useMemo(() => {
    if (selectedTag === 'semua') {
      return blogPosts;
    }
    return blogPosts.filter(post => post.tags.includes(selectedTag));
  }, [selectedTag]); // Only depends on selectedTag now

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle tag selection
  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1); // Reset to first page when changing tags
  };

  return (
    <div className="min-h-screen bg-base-300">
      <SEO 
        title="Blog Prediksi Togel | LAPAKTOTO"
        description="Kumpulan artikel dan tips prediksi togel terpercaya dari LAPAKTOTO. Pelajari strategi dan teknik analisis untuk meningkatkan peluang kemenangan Anda."
        keywords="blog lapaktoto, tips togel, prediksi togel, strategi togel, analisis togel"
      />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Blog Prediksi Togel</h1>
          <p className="text-xl text-gray-400">Tips dan Strategi Jitu dari Para Master</p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`btn btn-sm ${
                selectedTag === tag ? 'btn-primary' : 'btn-outline hover:btn-primary'
              } capitalize`}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
              {tag !== 'semua' && (
                <span className="ml-2 opacity-70">
                  {blogPosts.filter(post => post.tags.includes(tag)).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <BlogPost key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Tidak Ada Artikel</h2>
            <p className="text-gray-400">Tidak ada artikel yang sesuai dengan filter yang dipilih.</p>
            <button 
              className="btn btn-primary mt-4"
              onClick={() => handleTagSelect('semua')}
            >
              Lihat Semua Artikel
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="btn-group">
              <button 
                className="btn btn-outline btn-sm"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                «
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`btn btn-sm ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button 
                className="btn btn-outline btn-sm"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blog;
