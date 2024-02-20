import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const {carrito, vaciarCarrito, total} = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completar todos los campos");
            return;
        }

        if(email !== emailConfirmacion){
            setError("Los Emails no coinciden");
            return;
        }
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "¡Gracias por tu compra!",
                    text: `Tu número de orden es: ${docRef.id}`,
                    showConfirmButton: false,
                    timer: 1800
                  });
            })
            .catch(error =>{
                console.log("Error al crear la orden de compra", error);
                setError("No se pudo crear la orden");
            })
    }

  return (
    <div>
        <h2>Checkout - Datos para finalizar la compra</h2>
        <form onSubmit={manejadorSubmit}>
            {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>{producto.item.nombre} x {producto.cantidad}</p>
                        <p>${producto.item.precio}</p>
                        <hr />
                    </div>
                ))
            }

            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="apellido">Apellido</label>
                <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="telefono">Telefono</label>
                <input type="number" id="telefono" onChange={(e) => setTelefono(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="emailConfirmacion">Email de confirmacion</label>
                <input type="email" id="emailConfirmacion" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div>

            {
                error && <p>{error}</p>
            }

            <button>Finalizar orden</button>
        </form>
    </div>
  )
}

export default Checkout