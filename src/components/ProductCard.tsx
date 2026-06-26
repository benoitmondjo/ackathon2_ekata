import { RiStarSFill } from "react-icons/ri";
import "./_product_card.scss";

type TypePros = {
    product:{
        img: string,
        title: string,
        price: number,
        mass?: number,
        views?: number,
        stars?: number
    }
}
export default function ProductCard({product}: TypePros){

    return(
        <div className="product-card">
            <div className="image">
                <img src={product.img} alt="" className="img" />
            </div>

            <div className="body">
                <h3 className="title">{product.title}</h3>
                <p className="text">{product?.price} FCFA/ {product.mass} g</p>
                <div className="views">
                    <RiStarSFill className="star" />
                    <span> {product?.stars} ({product?.views})</span>
                </div>
            </div>
        </div>
    )
}