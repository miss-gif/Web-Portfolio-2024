import React from "react";

import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section>
      <h3>Portfolio</h3>
      <div>
        <button>버튼</button>
        <button>버튼</button>
        <button>버튼</button>
        <button>버튼</button>
      </div>
      <div className="아이템리스트">
        <div className="아이템">
          <img src="" alt="" />
          <p>React</p>
          <h4>감정 일기장</h4>
          <p>감정을 기록할 수 있는 일기장</p>
          <a href="https://diary-one-kappa.vercel.app/">상세보기</a>
        </div>
        <div className="아이템">
          <img src="" alt="" />
          <p>HTML, SCSS, JavaScript, 반응형</p>
          <h4>애플 아이패드 반응형 웹사이트</h4>
          <p>애플 아이패드 사이트 클론 코딩</p>
          <a href="https://apple-ipad-app-wheat.vercel.app/">상세보기</a>
        </div>
        <div className="아이템">
          <img src="" alt="" />
          <p>HTML, SCSS, JavaScript</p>
          <h4>스타벅스 웹사이트</h4>
          <p>스타벅스 웹사이트 클론 코딩</p>
          <a href="https://miss-gif.github.io/DP_Study_Starbucks_03/">
            상세보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
