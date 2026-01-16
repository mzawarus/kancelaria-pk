import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import OurTeam from "@/components/home/OurTeam";
import AboutUs from "@/components/home/AboutUs";
import {Stats} from "@/components/home/Stats";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutUs />
            <Stats />
            {/*<OurTeam />*/}
        </>
    );
}
