import ProductCard from "@/components/ProductCard";
import "./_products.scss";

import mielImg1 from "@/assets/images/products/miel-img-1.jpg";
import mielImg2 from "@/assets/images/products/miel-img-2.jpg";
import mielImg3 from "@/assets/images/products/miel-img-3.jpg";
import chenilleImg1 from "@/assets/images/products/chenille-img-1.png"
import chenilleImg2 from "@/assets/images/products/chenille-img-2.webp"
import chenilleImg3 from "@/assets/images/products/chenille-img-3.png"


const allProducts = [
    {
        id:1,
        img: mielImg1,
        title: 'Miel toutes fleurs',
        price: 6000,
        mass: 5,
        views: 20,
        stars: 3
    },
     {
        id:2,
        img: mielImg2,
        title: 'Miel toutes fleurs',
        price: 6000,
        mass: 5,
        views: 20,
        stars: 3
    },
     {
        id:3,
        img: chenilleImg1,
        title: 'Miel toutes fleurs',
        price: 6000,
        mass: 5,
        views: 20,
        stars: 3
    },
     {
        id:4,
        img: chenilleImg2,
        title: 'Miel toutes fleurs',
        price: 6000,
        mass: 5,
        views: 20,
        stars: 3
    },
     {
        id:5,
        img: mielImg3,
        title: 'Miel toutes fleurs',
        price: 6000,
        mass: 5,
        views: 20,
        stars: 3
    },
     {
        id:6,
        img: chenilleImg3,
        title: 'Miel toutes fleurs',
        price: 6000,
        mass: 5,
        views: 20,
        stars: 3
    }
]


export default function Products(){

    return(
        <div className="products main-container">
            <div className="container">
                <div className="first-block">
                    <h2>Nos produits phares</h2>
                    <a href="" className="btn">voir plus</a>
                </div>

                <div className="grid-card">
                    {allProducts.map( p => (
                        <ProductCard product={p}  />
                    ))}
                </div>

                <div className="border"></div>
            </div>
        </div>
    )
}