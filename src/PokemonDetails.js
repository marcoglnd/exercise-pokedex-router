import React, { Component } from 'react';
import pokemons from './data';
import { Redirect } from 'react-router-dom';

class PokemonDetails extends Component {
  render() {
    const {id} = this.props.match.params;
    const chosenPokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id, 10));
    const { name, type, averageWeight:{value, measurementUnit}, moreInfo, foundAt, image } = chosenPokemon;
    return (
      <div>
        <p>Nome: {name}</p>
        <img src={image} />
        <p>Tipo: {type}</p>
        <p>Peso: {value}{measurementUnit}</p>
        <p>Sumário: {moreInfo}</p>
        <p>Mapa: {foundAt.map((location) => {
          return <div>
            <p>{location.location}</p>
            <img src={location.map}/>
          </div>
        })}</p>
      </div>
    );
  }
}
 
export default PokemonDetails;
