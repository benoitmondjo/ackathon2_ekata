import "./_state.scss";
import { TbShoppingBag } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineSecurityScan } from "react-icons/ai";

export default function State(){

    return(
        <div className="state main-container">
            <div className="container grid">
                <div className="box">
                    <span>
                        <TbShoppingBag className="icon" />
                    </span>
                        
                    <div className="content">
                        <h2 className="title">100%</h2>
                        <p className="text">Produits naturelle</p>
                    </div>
                </div>
                
                 <div className="box">
                    <span>
                        <TbShoppingBag className="icon" />
                    </span>
                        
                    <div className="content">
                        <h2 className="title">Producteurs</h2>
                        <p className="text">Locaux vérifiés</p>
                    </div>
                </div>

                <div className="box">
                    <span>
                        <CiDeliveryTruck className="icon" />
                    </span>
                        
                    <div className="content">
                        <h2 className="title">Livraison rapide</h2>
                        <p className="text">Partout au Gabon</p>
                    </div>
                </div>

                <div className="box">
                    <span>
                        <AiOutlineSecurityScan className="icon" />
                    </span>
                        
                    <div className="content">
                        <h2 className="title">Paiement sécurisé</h2>
                        <p className="text">100% de sécurité</p>
                    </div>
                </div>
            </div>
            <div className="border"></div>
        </div>
    )
}