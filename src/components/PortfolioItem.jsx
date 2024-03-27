import "./PortfolioItem.scss";

const PortfolioItem = ({ id, image, url, title, category, description }) => {
  return (
    <div className="PortfolioItem">
      <img className="PortfolioItem__image" src="" alt="" />
      <p className="PortfolioItem__category">{category}</p>
      <h4 className="PortfolioItem__title">{title}</h4>
      <p className="PortfolioItem__description">{description}</p>
      <button>상세보기</button>
    </div>
  );
};

export default PortfolioItem;
