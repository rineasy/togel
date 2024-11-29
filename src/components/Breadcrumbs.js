import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    'prediksi': 'Prediksi Togel',
    'jadwal': 'Jadwal Togel',
    'privacy-policy': 'Kebijakan Privasi',
    'terms-of-service': 'Syarat dan Ketentuan'
  };

  return (
    <nav className="text-sm breadcrumbs px-4 py-2 bg-base-200" aria-label="breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-primary hover:text-primary-focus">
            Beranda
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="flex items-center">
              <span className="mx-2 text-gray-500">/</span>
              {isLast ? (
                <span className="text-gray-500" aria-current="page">
                  {breadcrumbNameMap[name] || name}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-primary hover:text-primary-focus"
                >
                  {breadcrumbNameMap[name] || name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
