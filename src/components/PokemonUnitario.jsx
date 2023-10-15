import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PokemonUnitario = ({ pokemon }) => {
  const { name, stats, src, type } = pokemon || {};

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokemones`);
  };

  const statList = stats?.map((stat) => (
    <li key={stat.name}>
      {stat.name}: {stat.base}
    </li>
  ));

  return (
    <section className="container text-center">
      <Card>
        <Card.Img height="300" src={src} alt={name} />
        <Card.Body>
          <Card.Title as="h1">{name}</Card.Title>
          <ul className="list-unstyled text-start">
            {statList}
          </ul>
          <Card.Text className="bg-danger text-white p-2 rounded fw-bold text-capitalize mt-3">
            {type}
          </Card.Text>
        </Card.Body>
      </Card>
      <button onClick={handleClick} className="btn btn-info btn-lg btn-block mt-3">
        Back
      </button>
    </section>
  );
};

export default PokemonUnitario;
