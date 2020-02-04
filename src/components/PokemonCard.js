import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {

    toggle: true
  }

  
  handleToggleImg = (evt) => {
    console.log('clicked')
    // this.setState({
    //   toggle: !this.state.toggle
    // })
    
        this.setState(prevState => {
            return {toggle: !prevState.toggle}
        })
  }

  render() {
    
                    //
    // let toggleImgUrl = this.state.toggle ? front : back 
    // console.log(this.state.toggle)

    // What ever you do inside this class, will be multiple times , because this is being render inside the MAP !!!  
                     // or destruct sprites, then sprites.front and sprites.back 

    const {name, sprites:{front,back}, stats, sprites} = this.props.pokemonObj

    // Iterate through stats, find the object pair with name:'hp'
    // Stats is array of objects, and we need the name:hp, then get its value. 
    let foundObj = stats.find(oneStat => (
        oneStat.name === 'hp'
    ))

    return (
      <Card>
        <div>
          <div onClick = {this.handleToggleImg} className="image">
          {/* now have a eventListener to toggle true and false */}
            <img src = {this.state.toggle? front : back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {foundObj.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
