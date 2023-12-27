import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la tienda online de Sala Hogar"/>
    </div>
  )
}

export default App