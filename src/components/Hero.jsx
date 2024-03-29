import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="section">
        <div className="inner2">
          <di className="home__wrapper">
            <div className="home__content">
              <p>
                hello, <span className="point-text">my name is</span>
              </p>
              <h2 className="home__title">doeok gwak</h2>
              <p className="home__subtitle">
                <span className="point-text">i am</span>
                <b className="bold">web developer</b>
              </p>
              <p className="home__description">
                새로운 도전과 성장을 즐기며 매 순간 새로운 아이디어를 만들어내고
                협업을 통해 프로젝트를 완성하는 사람입니다. 웹 개발은 항상
                새로운 기술과 트렌드가 등장하며, 이를 따라가기 위해 지속적인
                학습과 적용이 필요합니다. 하지만 저는 기술적인 측면만 고집하는
                것이 아니라, 사용자와 고객의 요구사항을 항상 고려하여 만족스러운
                웹사이트를 제작하는 것이 가장 중요하다고 생각합니다. 제가 가진
                능력은 기능적인 측면 뿐만 아니라 시각적인 측면에서도 매력적이며,
                사용자 친화적인 웹사이트를 제작하는 데 있어서 능숙합니다. 또한
                각 프로젝트마다 고객과 사용자의 요구사항을 고려하고 이에 맞게
                조정할 수 있는 능력도 갖추고 있습니다.
              </p>
              <p className="home__footer">
                제 포트폴리오를 통해 제가 가진 경험과 능력을 확인해주세요.{" "}
                <br />
                <b>Thank you.</b>
              </p>
              <ul className="home__link__icon">
                <li>
                  <a href="#" className="icon-button">
                    <img
                      src="./images/svg-github-logo.svg"
                      alt="git-link-button"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="icon-button">
                    <img
                      src="./images/svg-notion_logo.svg"
                      alt="notion-link-button"
                    />
                  </a>
                </li>
              </ul>
              <button className="view-button">view cv</button>
            </div>
            <div className="home__image">
              <img src="images/test.JPG" alt="" />
            </div>
          </di>
        </div>
      </section>
    </>
  );
};

export default Hero;
