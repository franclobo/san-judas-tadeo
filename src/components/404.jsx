import React from 'react';
import Error404 from '../assets/images/page-not-found.jpg';

function PageNotFound() {
  return (
    <div>
      <img src={Error404} alt="Página no encontrada" style={{ width: '100%' }} />
    </div>
  )
}

export default PageNotFound
