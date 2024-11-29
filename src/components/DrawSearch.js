import React, { useState } from 'react';

const DrawSearch = ({ draws, onSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('all');

  const handleSearch = () => {
    if (!searchTerm) {
      onSearchResult(draws);
      return;
    }

    const filteredDraws = draws.filter(draw => {
      const searchValue = searchTerm.toLowerCase();
      
      switch(searchType) {
        case 'name':
          return draw.Name.toLowerCase().includes(searchValue);
        case 'result':
          return draw.Result.toLowerCase().includes(searchValue);
        case 'top4d':
          return draw.Top4D.toLowerCase().includes(searchValue);
        case 'top3d':
          return draw.Top3D.toLowerCase().includes(searchValue);
        case 'top2d':
          return draw.Top2D.toLowerCase().includes(searchValue);
        case 'colok':
          return draw.Colok.toLowerCase().includes(searchValue);
        case 'date':
          return draw.Tanggal.toLowerCase().includes(searchValue);
        default:
          return (
            draw.Name.toLowerCase().includes(searchValue) ||
            draw.Result.toLowerCase().includes(searchValue) ||
            draw.Top4D.toLowerCase().includes(searchValue) ||
            draw.Top3D.toLowerCase().includes(searchValue) ||
            draw.Top2D.toLowerCase().includes(searchValue) ||
            draw.Colok.toLowerCase().includes(searchValue) ||
            draw.Tanggal.toLowerCase().includes(searchValue)
          );
      }
    });

    onSearchResult(filteredDraws);
  };

  return (
    <div className="mb-4 flex flex-col md:flex-row gap-2">
      <div className="flex-grow">
        <input 
          type="text" 
          placeholder="Cari Berdasarkan..." 
          className="input input-bordered w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>
      
      <select 
        className="select select-bordered w-full md:w-auto"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="all">Semua Kategori</option>
        <option value="name">Nama</option>
        <option value="result">Hasil</option>
        <option value="top4d">Top 4D</option>
        <option value="top3d">Top 3D</option>
        <option value="top2d">Top 2D</option>
        <option value="colok">Colok</option>
        <option value="date">Tanggal</option>
      </select>
      
      <button 
        className="btn btn-primary"
        onClick={handleSearch}
      >
        Cari
      </button>
    </div>
  );
};

export default DrawSearch;
