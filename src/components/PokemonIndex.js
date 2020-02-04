import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
    state = {
      pokemons: [], 
      searchTerm: ''

    }

    handleDynamicSearch = (text) => {
      // console.log(text)

      this.setState({
        searchTerm: text
      })
    }

    // Function to display array that we care about:
    
    filterSearch = () => {
 
      //  let arrayWeWantToRender = 
       return this.state.pokemons.filter( pokeMon => {

        return pokeMon.name.includes(this.state.searchTerm)

      })
      // console.log(arrayWeWantToRender)

          // return arrayWeWantToRender

    }

    // Fetch
    addNewpokemon = (newPokemonState) => {
      // console.log(newPokemonState)

      let copiedPokemonObj = {

        name: newPokemonState.name,
        sprites: {
          front: newPokemonState.frontUrl,
          back: newPokemonState.backUrl
        },
        stats: [{name: 'hp', value: parseInt(newPokemonState.hp)}]
      }

      let newAddedArray = [...this.state.pokemons, copiedPokemonObj]

      this.setState({
        pokemons: newAddedArray
      })
    }

    componentDidMount(){
      fetch("http://localhost:3000/pokemon?_limit=20")
      .then(res => res.json())
      .then(pokemonFetchArray => {
          this.setState({
            pokemons: pokemonFetchArray
          })
      })
    }

  render() {
    // console.log(this.state.pokemons)
   
    return (
  
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewpokemon = {this.addNewpokemon}/>
        <br />
        <Search handleDynamicSearch = {this.handleDynamicSearch} state ={this.state.searchTerm}/>
        <br />
        {/* Pass array down to collection, because it is rendering each card. */}
        <PokemonCollection pokemons = {this.filterSearch()}/>
      </Container>
    )
  }
}

export default PokemonPage
