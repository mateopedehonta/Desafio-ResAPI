let i = 3
let productos = [
    {
       title:'Regla',
       price:100,
       url:"regla.com",
       id:1
    },
    {
        title:'Escuadra',
       price:100,
       url:"escuadra.com",
       id:2
    }
]


export const getAll = (req,res)=>{
    res.json(productos)
// devuelve todos los productos.
}
export const addProducto =(req,res)=>{
    const { title,price,url }= req.body

    productos.push({
        title,
        price,
        url,
        id: i++
    })
    res.send(`Producto agregado, id: ${i-1}`)
    // recibe y agrega un producto, y lo devuelve con su id asignado.
    }

export const getById= (req,res)=>{
    const producto = productos.filter(item=>item.id === Number(req.params.id))
    if (producto.length == 0) {
       res.send("El producto no existe")
    } else {
        res.json(producto)
    }
    // devuelve un producto según su id.
}
export const updateProduct= (req,res)=>{
    const { title,price,url}= req.query
    const id = Number(req.params.id)
    productos = productos.filter(item=> item.id !== id)
    const producto = {title,price,url,id}
    productos.push(producto)
        res.json(producto)
// recibe y actualiza un producto según su id.
}

export const deleteProducto = (req,res)=>{
    const id = Number(req.params.id)
    productos = productos.filter(item=>{
        return item.id !== id
    })
    res.send(`Producto eliminado, id: ${id}`)
    // elimina un producto según su id.
}
