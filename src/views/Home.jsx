import React from 'react';
import homeImage from '../assets/picachubailando.gif';


const Home = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-5">Bienvenidos</h1>
          <img
            src={homeImage}
            alt="picachufeliz"
            className="img-fluid mt-3"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
