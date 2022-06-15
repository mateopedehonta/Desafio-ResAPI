import express, { Router } from 'express';
const router = Router()
let i = 3
let productos = [
    {
        tipo:'regla',
        id:1
    },
    {
        tipo:'harina',
        id:2
    }
]


router.route('/productos')
    .get((req,res)=>{
        res.json(productos)
    // devuelve todos los productos.
    })
    .post((req,res)=>{
    const { tipo }= req.body
    console.log(tipo)
    const producto = {
        tipo,
        id: i++
    }
    productos.push(producto)
    res.send(`Producto agregado, id: ${producto.id}`)
    // recibe y agrega un producto, y lo devuelve con su id asignado.
    })

router.route('/productos/:id')
    .get((req,res)=>{
        res.json(productos.filter(item=>{
            return item.id === Number(req.params.id)
        }))
        // devuelve un producto según su id.
    })
    .put((req,res)=>{
        const id = Number(req.params.id)
        productos = productos.filter(item=>{
            return item.id !== id
        })
        const producto = {
            tipo:req.query.tipo,
            id: id
        }
        productos.push(producto)
            res.json({
                id,
                tipo: req.query.tipo
            })
    // recibe y actualiza un producto según su id.
    })
    .delete((req,res)=>{
        const id = Number(req.params.id)
        productos = productos.filter(item=>{
            return item.id !== id
        })
        console.log(productos)
        res.send(`Producto eliminado, id: ${id}`)
        // elimina un producto según su id.
    })
export default router