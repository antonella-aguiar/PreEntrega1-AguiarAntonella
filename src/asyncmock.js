const productos = [
    {
        id: '1',
        nombre:"Batidora Planetaria Atma" ,
        precio: 100000,
        img: "../img/batidora planetaria atma bpat21grp.jpg",
        categoria: "electro"
    },
    {
        id: '2',
        nombre:"Cloudbook 14'' Lenovo",
        precio: 130000,
        img:"../img/Cloudbook 14'' lenovo IP1-81VU0065.jpeg",
        categoria: "tecno"
    },
    {
        id: '3',
        nombre:"Joystick Inalámbrico PS4",
        precio: 40000,
        img:"../img/Joystick dorado ps4.jpg",
        categoria: "tecno"
    },
    {
        id: '4',
        nombre:"Hidrolavadora 1200W Daewoo",
        precio: 82000,
        img:"../img/Hidrolavadora 1200W Daewoo DAX1130.jpeg",
        categoria: "electro"
    },
    {
        id: '5',
        nombre:"Luz Proton Led Ecosmart",
        precio: 25000,
        img:"../img/Luz proton led ecosmart es-3600p.jpg",
        categoria: "tecno"
    }
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 1000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve =>{
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 1000)
    })
}

export const getProductossPorCategoria = (idCategoria) => {
    return new Promise ( resolve =>{
        setTimeout ( () => {
            const productosCategoria = productos.filter(prod => prod.categoria === idCategoria)
            resolve(productosCategoria);
        },1000)
    }) 
}