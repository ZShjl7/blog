import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import HomeComponent from "@/components/home";
import About from "@/components/about";
import Famed from "@/components/famed";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
    <div className={styles.background_image}>

      <Navbar />
      <HomeComponent />
      <About />
      <Famed />
      <Contact />
    </div>
    </>
  );
}
