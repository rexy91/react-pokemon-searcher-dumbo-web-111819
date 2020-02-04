import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
    // Map and send down

  render() {

    let pokemonMapper = this.props.pokemons.map(pokemon => {
    
      return <PokemonCard

      key = {pokemon.id}
      pokemonObj = {pokemon} /> 
  
    })

    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokemonMapper}
      </Card.Group>
    )
  }
}

export default PokemonCollection
