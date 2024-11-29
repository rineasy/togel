import React, { useEffect, useState } from 'react';
import MarketCard from './MarketCard';

const ITEMS_PER_PAGE = 10;

const MarketGrid = () => {
  const [markets, setMarkets] = useState([]);
  const [displayedMarkets, setDisplayedMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/schedule');
        if (!response.ok) {
          throw new Error('Failed to fetch markets');
        }
        const data = await response.json();
        setMarkets(data.schedules);
        setDisplayedMarkets(data.schedules.slice(0, ITEMS_PER_PAGE));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMarkets();
  }, []);

  const handleViewMore = () => {
    setIsExpanded(!isExpanded);
    setDisplayedMarkets(isExpanded ? markets.slice(0, ITEMS_PER_PAGE) : markets);
  };

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {displayedMarkets.map((market) => (
          <MarketCard key={market.name} market={market} />
        ))}
      </div>
      {markets.length > ITEMS_PER_PAGE && (
        <div className="text-center">
          <button
            onClick={handleViewMore}
            className="btn btn-primary btn-sm"
          >
            {isExpanded ? 'Show Less' : `View ${markets.length - ITEMS_PER_PAGE} More Markets`}
          </button>
        </div>
      )}
    </div>
  );
};

export default MarketGrid;
