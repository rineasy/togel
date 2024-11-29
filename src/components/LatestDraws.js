import React, { useState, useEffect } from 'react';
import { fetchLatestDraws } from '../services/api';
import DrawCard from './DrawCard';
import DrawSearch from './DrawSearch';

const ITEMS_PER_PAGE = 5;

const LatestDraws = () => {
  const [allDraws, setAllDraws] = useState([]);
  const [draws, setDraws] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDraws = async () => {
      try {
        setLoading(true);
        const data = await fetchLatestDraws();
        setAllDraws(data);
        setDraws(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadDraws();
  }, []);

  // Handle search results
  const handleSearchResult = (searchResults) => {
    setDraws(searchResults);
    setCurrentPage(1);
  };

  // Pagination calculations
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentDraws = draws.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(draws.length / ITEMS_PER_PAGE);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search Component */}
      <DrawSearch 
        draws={allDraws} 
        onSearchResult={handleSearchResult} 
      />

      {/* No Results Message */}
      {draws.length === 0 && (
        <div className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Tidak ada hasil yang ditemukan</span>
        </div>
      )}

      {/* Draws Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentDraws.map((draw) => (
          <DrawCard key={draw._id} draw={draw} />
        ))}
      </div>

      {/* Pagination Controls */}
      {draws.length > ITEMS_PER_PAGE && (
        <div className="join flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`join-item btn btn-sm ${currentPage === i + 1 ? 'btn-primary' : 'btn-ghost'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestDraws;
