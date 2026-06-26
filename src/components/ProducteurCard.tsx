import { RiStarSFill } from "react-icons/ri";

type TypePros = {
    product:{
        img: string,
        name: string,
        desc: string
        stars?: number,
        views?: number,
    }
}
export default function ProducteurCard({product}: TypePros){

    return(
        <div className="product-card">
            <div className="image">
                <img src={product.img} alt="" />
            </div>
            <div className="body">
                <h3 className="title">{product.name}</h3>
                <p className="text">{product?.desc}</p>
                <div className="views">
                    <RiStarSFill className="star" />
                    <span> {product?.stars} ({product?.views})</span>
                </div>
            </div>
        </div>
    )
}