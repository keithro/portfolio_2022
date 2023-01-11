import Head from "next/head";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [darkNav, setDarkNav] = useState(false);
  const [pageLocation, setPageLocation] = useState("Home");

  return (
    <div>
      <Head>
        {/* <title>Keith&apos;s Portfolio</title> */}
        <title>Keith | Full Stack Engineer</title>
        <meta name="description" content="Keith Rodriguez's portfolio site" />
        <meta
          name="keywords"
          content="Keith Rodriguez, software engineer, software developer, frontend developer, front-end developer, full stack developer, back end developer"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar darkNav={darkNav} pageLocation={pageLocation} />
      <main>
        <Hero setDarkNav={setDarkNav} setPageLocation={setPageLocation} />
        <About setPageLocation={setPageLocation} />
        <Projects setPageLocation={setPageLocation} />
        <Contact setPageLocation={setPageLocation} />
      </main>
      <Footer />
    </div>
  );
}
