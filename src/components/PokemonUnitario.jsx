import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PokemonUnitario = ({ pokemon }) => {
  const { name, stats, src, types } = pokemon || {};

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokemones`);
  };

  const statList = stats?.map((stat) => (
    <li key={stat.name}>
      {stat.name}: {stat.base}
    </li>
  ));

  const cardStyles = {
    width: "37rem",
    margin: "5px auto",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "white", // Fondo blanco
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sutil sombra
  };

  const titleStyles = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const cardTextStyles = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: "15px",
  };

  return (
    <section className="container text-center">
      <Card style={cardStyles}>
        <Card.Img height="300" src={src} alt={name} />
        <Card.Body>
          <Card.Title as="h1" style={titleStyles}>
            {name}
          </Card.Title>
          <span className="list-unstyled text-start">
            <Card.Text style={titleStyles}>{statList}</Card.Text>
          </span>
          <Card.Text style={cardTextStyles}>{types}</Card.Text>
        </Card.Body>
      </Card>
      <button onClick={handleClick} className="btn btn-info btn-lg btn-block mt-1">
        Back
      </button>
    </section>
  );
};

export default PokemonUnitario;
