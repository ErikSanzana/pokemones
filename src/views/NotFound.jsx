import React from 'react';
import notfoundImage from '../assets/notfound.gif';
/* cacho not found , recordar tratar como modulo de importancion */

const NotFound = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-5">404 - Página no encontrada</h1>
          <img
            src={notfoundImage}
            alt="Imagen de error"
            className="img-fluid mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;

