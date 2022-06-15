import { Router } from 'express';
import {getAll,getById,addProducto,updateProduct,deleteProducto} from './../controller/controller.js'
const router = Router()

router.route('/productos')
    .get(getAll)
    .post(addProducto)

router.route('/productos/:id')
    .put(updateProduct)
    .get(getById)
    .delete(deleteProducto)

export default router