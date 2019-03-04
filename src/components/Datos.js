import React, { Component, Info } from 'react';
import Personajes from './Personajes';
import axios from 'axios';
import Details from './Details';


class Datos extends Component {
  constructor(){
    super();
    this.state = {
        items: [],
    }
}

componentDidMount(){
    axios.get('https://rickandmortyapi.com/api/character/?page=1')
    .then(res =>{
        const datosPersonajes = res.data.results;
        this.setState({
           items: datosPersonajes,
        })
      }).catch(console.log('error'))
}
  render(){
    const { items } = this.state;
    console.log(items);
    return(
    <div>
    { 
      items.map(info => {
        return (
          <Info>
            <Personajes 
                key = {info.id} 
                id = {info.id} 
                name = {info.name} 
                image = {info.image} 
                status = {info.status}/>
      
          </Info>
        );
      })
    } 
    </div>
     );
  }
}

 export default Datos;
