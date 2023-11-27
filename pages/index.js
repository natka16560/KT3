import Head from "next/head";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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

