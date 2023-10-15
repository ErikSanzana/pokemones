import React, { useEffect, useState } from "react";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import cargandoImage from '../assets/cargando.gif';


const Pokemones = () => {
  const [pokemones,setPokemones]=useState([]);
  const [pokemonesSelected,setPokemonesSelected]=useState('');
  const navigate=useNavigate();

  const url='https://pokeapi.co/api/v2/pokemon';
  const getPokemons=async()=>{
    const rest=await fetch(url);
    const {results}=await rest.json();
    setPokemones(results);
  }

  const goToPokemonDetails=async()=>{
    pokemonesSelected ? navigate(`/pokemones/${pokemonesSelected}`) :alert("debes marcar un pokemon")
  };


  useEffect(()=>{
    getPokemons();
  },[]);

  return (
    <div className="mt-5 text-center">
      <h1>Selecciona un pokemon</h1>
      <div className="col-5 col-sm-3 col-lg-2 mx-auto">
        <select value={pokemonesSelected} className="form-select text-center"
        onChange={({target})=>setPokemonesSelected(target.value)
      }
        >
          <option value="" disabled>
            Pokemones
          </option>
          {pokemones.map(({name},i)=>(
            <option
            key={i}
            value={name}>
              {name}
            </option>
          ))}
        </select>
        <Button onClick={goToPokemonDetails}
        variant="dark" className="mt-3">
          Detalles
        </Button>
      </div>
      <img
            src={cargandoImage}
            alt="cargando"
            className="img-fluid mt-3"
          />
    </div>
  );
};

export default Pokemones;