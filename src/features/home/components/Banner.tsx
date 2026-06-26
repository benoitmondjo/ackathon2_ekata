import {ButtonOrange} from "../../../components/UI/Button";
import "./_banner.scss";

export default function Banner(){

    return(
        <div className="main-container">
            <div className="banner container">
                <div className="content">
                    <h2 className="title">Rejoignez notre communauté de producteurs</h2>
                    <p className="text">Vendez vos produits et developez votre activite avec EKATA</p>
                    
                    <ButtonOrange label='Devenir producteur' />
                </div>
            </div>
        </div>
       
    )
}