import Products from "../models/Products";
import { getPagination } from "../libs/getPagination";

export const getAllProducts = async (req, res) => {
    try {
        const { size, page } = req.query;

        const { limit, offset } = getPagination(page, size);

        const products = await Products.paginate({}, { offset, limit });
        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Something goes wrong retrieving the products"
        });
    }
}

export const getOneProduct = async (req, res) => {
    const { id } = req.params;
    try {

        const product = await Products.findById(id);
        console.log(product);


        if (!product)
            res.status(404)
                .json({ message: `Task  width id ${req.params.id} does not exist` });

        res.json(product);
        return
    } catch (err) {
        res.status(500).json({
            message: err.message || `Error Reatrieving Product with id: ${id}`,
        });
    }
}

export const createProduct = async (req, res) => {

    if (!req.body.name) {
        return res.status(400).send({ message: "content cannot be empty" });
    }

    try {
        const newProduct = new Products({
            name: req.body.name,
            brand: req.body.brand,
            img: req.body.img,
            type: req.body.type,
            class: req.body.class,
            product: req.body.product,
            description: req.body.description,
            price: req.body.price
        });
        const productSaved = await newProduct.save();
        res.json(productSaved);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Something goes wrong creating a product"
        });
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        await Products.findByIdAndDelete(id);
        res.json({
            message: "Product were deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || `Cannot delete product with id: ${id}`
        });
    }
}

export const updateProduct = async (req, res) => {
    await Products.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Product was updated Succesfully" });
};
