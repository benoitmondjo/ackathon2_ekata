import Hero from "@/features/home/components/Hero.tsx";
import State from "@/features/home/components/State.tsx";
import Products from "@/features/home/components/Products.tsx";
import Producteurs from "@/features/home/components/Producteurs.tsx";
import Banner from "@/features/home/components/Banner.tsx";


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