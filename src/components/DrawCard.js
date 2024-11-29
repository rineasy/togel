import React, { useState } from 'react';

const DrawCard = ({ draw }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
      <div className="card-body p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="card-title text-primary">{draw.Name}</h3>
            <div className="text-lg font-bold">{draw.Result}</div>
          </div>
          <button 
            className="btn btn-ghost btn-sm"
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          >
            {isDetailsOpen ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        <div className="text-right mt-2">
          <p className="text-sm opacity-75">{draw.Tanggal}</p>
        </div>

        {isDetailsOpen && (
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-secondary">Top 4D</h3>
                <p className="text-sm">{draw.Top4D}</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Top 3D</h3>
                <p className="text-sm">{draw.Top3D}</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Top 2D</h3>
                <p className="text-sm">{draw.Top2D}</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Colok</h3>
                <p className="text-sm">{draw.Colok}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-secondary">Colok 2D</h3>
                <p className="text-sm">{draw.Colok2D}</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Shio</h3>
                <p className="text-sm">{draw.Shio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawCard;
