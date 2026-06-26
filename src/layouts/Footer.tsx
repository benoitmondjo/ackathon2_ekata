import "@/layouts/_footer.scss";

import logo from '@/assets/images/logos/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer(){

    return(
        <footer className="footer .main-container">

            <div className="container">

                <div className="grid">

                    <div className="box">
                        <div>
                            <a href="" className="logo">
                                <img src={logo} alt="" />
                            </a>
                        </div>

                        <p className="text">
                            Plateform dédiée aux produits du terroir gabonais. Valorison ensembles nos richesses locales.
                        </p>

                        <div className="socials">
                            <a href="" className="">
                                <FaFacebookF className="icon" />
                            </a>

                            <a href="">
                                <FaInstagram className="icon" />
                            </a>

                            <a href="">
                                <FaWhatsapp className="icon" />
                            </a>
                        </div>
                    </div>

                    <div className="box">
                        <h3 className="title">Liens rapides</h3>

                        <div className="links">
                            <a href="" className="link">acceuil</a>
                            <a href="" className="link">produits</a>
                            <a href="" className="link">producteurs</a>
                            <a href="" className="link">a propos</a>
                            <a href="" className="link">a contact</a>
                        </div>
                    </div>

                    <div className="box">
                        <h3 className="title">Categories</h3>
                        <div className="links">
                            <a href="">Miel</a>
                            <a href="">Chenilles</a>
                            <a href="">Pack decouvertes</a>
                            <a href="">Nouveauté</a>
                        </div>
                    </div>

                    <div className="box">
                        <h3 className="title">Suivez-nous</h3>
                        <div>

                        </div>
                    </div>

                </div>

                <div className="copyrith">
                    <p className="">@ 2026 EKATA. Tous droits réservés.</p>
                    <p>CGU |  Confidentialités</p>
                </div>

            </div>
        </footer>
    )
}