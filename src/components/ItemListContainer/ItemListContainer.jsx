import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductossPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListcontainer = () => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();
  useEffect ( () => {
    
    const funcionProductos = idCategoria ? getProductossPorCategoria : getProductos;
    funcionProductos(idCategoria)
      .then( res => setProductos(res));
  }, [idCategoria])

  return (
    <div>
      <h2>Productos</h2>
      <ItemList productos={productos}/>
    </div>
    
  )
}

export default ItemListcontainer