import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import "./Home.scss";

const Home = () => {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <main>
        <Portfolio />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
