import React from 'react'

const Search = (props) => {

  const handleSearchOnchange = (e) => {
        // console.log(props)
        // Controll the state
        // Controll the from (by setting state.sth as value inside the input)
        props.handleDynamicSearch(e.target.value)


        // If this is passed up, console should change everytime we r typing. 
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={props.state}   onChange = {handleSearchOnchange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
