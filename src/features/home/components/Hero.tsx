import {ButtonOrange, ButtonWhite} from "@/components/UI/Button";

import heroImg from "@/assets/images/home/hero.png"
import './_hero.scss';

export default function Hero(){

    return (
        <div className="hero main-container">
            <div className="flex container">
                <div className="content">
                    <h1 className="title">Savourez l'essence du Gabon</h1>
                    <p className="text">
                        Miel pur et chenilles comestibles directment des producteurs locaux.
                    </p>
                    <div className="btn-group">
                        <ButtonOrange label="Découvrir les produits" />
                        <ButtonWhite label='Découvrir producteurs' />
                    </div>
                </div>

                <div className="image">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    )
}