import Head from "next/head";
import Home from "./main/Home";
import About from "./main/About";
import Contact from "./main/Contact";
import Footer from "./main/Footer";

const Index = () => {
    return (
      <div className="App">
        <Head>
          <title>Главная</title>
          <meta keywords='Рандомайзер рандом случайные случайность'></meta>
        </Head>
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    );
};

export default Index;

