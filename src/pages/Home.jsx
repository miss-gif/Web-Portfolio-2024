import "./Home.scss";

import Header from "../components/Header";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";

import Footer from "../components/Footer";

import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <Skills />
        <Portfolio />
        <Resume />
      </main>
      <Footer />
      <Nav />
    </div>
  );
};

export default Home;
