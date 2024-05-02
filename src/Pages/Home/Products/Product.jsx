
const Product = ({ product }) => {

    const { image, price, name } = product
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p className="text-end -mt-10">{price} tk</p>
                <div className="card-actions justify-end">
                    <button className=" btn btn-active btn-ghost">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;