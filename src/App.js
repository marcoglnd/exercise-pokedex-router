import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';
import Favoritos from './Favoritos';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Switch>
        <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} /> } />
        <Route path="/details/:id" render={(props) => <PokemonDetails {...props} /> } />
        <Route path="/about" component={About} />
        <Route path="/favoritos" component={Favoritos} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;