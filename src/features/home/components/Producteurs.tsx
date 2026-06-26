import ProducteurCard from "@/components/ProducteurCard.tsx";
import "./_producteurs.scss";

import producteurImg1 from "@/assets/images/producteurs/producteur-img-1.png"
import producteurImg2 from "@/assets/images/producteurs/producteur-img-2.png"
import producteurImg3 from "@/assets/images/producteurs/producteur-img-3.png"

const allProducteurs = [
    {
        id:1,
        img: producteurImg1,
        name: 'lEKOUMBE Jean',
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        views: 20,
        stars: 3
    },
     {
        id:2,
        img: producteurImg3,
        name: "KOMBE Bernard",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        views: 20,
        stars: 3
    },
     {
        id:3,
        img: producteurImg2,
        name: 'Marie Françoise',
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        views: 20,
        stars: 3
    },
]



export default function Producteurs(){

    return(
        <div className="producteurs main-container">
            <div className="container">
                <div className="first-block">
                    <h2>Producteurs en vedette</h2>
                    <a href="" className="btn">voir plus</a>
                </div>

                <div className="grid-card">
                    {allProducteurs.map( p => (
                        <ProducteurCard product={p}  />
                    ))}
                </div>

                <div className="border"></div>
            </div>
        </div>
    )
}