import "./Portfolio.scss";
import Button from "../components/Button";
import { categoryList, projects } from "../JSON/data";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">Portfolio</h2>

      <p className="section__subtitle">
        My <span>Project</span>
      </p>

      <div className="portfolio__category">
        {categoryList.map((item, index) => (
          <Button key={index} title={item} />
        ))}
      </div>

      <div className="portfolio__list">
        {projects.map((item) => (
          <PortfolioItem
            key={item.id}
            image={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
