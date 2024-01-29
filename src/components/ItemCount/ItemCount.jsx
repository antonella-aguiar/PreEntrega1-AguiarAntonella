//voy a importar un Hook que me permita crear un estado
import { useState } from "react";

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);

    //useState me retorna un array con dos elementos. El primero es el estado y el segundo es una funcion que me actualiza el valor de ese estado

    const incrementar = () => {
        if (contador < stock){
        setContador(contador+1);
        }
    }

    const decrementar = () => {
        if (contador > stock){
        setContador(contador-1);
        }
    }

  return (
    <div>
        <button onClick={decrementar}>-</button>
        <p>{contador}</p>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount