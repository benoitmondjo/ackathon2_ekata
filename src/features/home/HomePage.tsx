import Hero from "./components/Hero";
import State from "./components/State";
import Products from "./components/Products";
import Producteurs from "./components/Producteurs";
import Banner from "./components/Banner";


export default function HomePage(){

    return (
        <>
            <Hero />
            <State />
            <Products />
            <Producteurs />
            <Banner />
        </>
    )
}