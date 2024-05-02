import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
    const [products,setProducts] = useState([])

    console.log(products)

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-5 mb-10">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;