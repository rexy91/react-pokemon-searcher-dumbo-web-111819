import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }

  handleAllChange = (e) => {
      // Get the name and value from e.target
      // Form controlsl the state 
      const {name,value} = e.target 
      this.setState({
        [name]: value
      })
    }
    handleSubmit = (e) => {
      // State is already being controlled by form, so here will pass in state with fille in info. 

      // console.log(this.state)
      // Only submit after user typed , not as typing
      e.preventDefault()
      // Pass up the state 
      this.props.addNewpokemon(this.state)
    
    }

  render() {

    const {name, hp, frontUrl, backUrl} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input value = {name} onChange = {this.handleAllChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input value = {hp} onChange = {this.handleAllChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input value = {frontUrl} onChange = {this.handleAllChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input value = {backUrl} onChange = {this.handleAllChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
