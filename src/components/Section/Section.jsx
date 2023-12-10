import React from "react";
import "./Section.scss";
import line from "../../assets/images/line.svg";
const Section = () => {
  return (
    <>
      <div className="section">
        <div className="section__left">
          <h1>
            Зарабатывайте <span>больше</span>
          </h1>
          <p className="gradient__text">с WELBEX</p>
          <h4>
            Развиваем и контролируем <span>продажи за вас</span>
          </h4>
        </div>
        <div className="section__right">
          <div className="text__one">
            <h4>
              Вместе с<p className="gradient__text"> бесплатной</p>
            </h4>
            <h4>
              <p className="gradient__text">консультацией</p> мы дарим:
            </h4>
          </div>
          <div className="text___two">
            <div>
              <img src={line} alt="" />
              <span>Skype аудит</span>
            </div>
            <div>
              <img src={line} alt="" />
              <span>30 виджетов</span>
            </div>
            <div>
              <img src={line} alt="" />
              <span>Dashboard</span>
            </div>
            <div>
              <img src={line} alt="" />
              <span>Месяц аmoCRM</span>
            </div>
          </div>
          <div className="text__table">
            <div>
              <h4>Виджеты</h4>
              <p>
                30 готовых <span>решений</span>
              </p>
            </div>
            <div>
              <h4>Dashboard</h4>
              <p>
                 с показателями <span>вашего бизнеса</span>
              </p>
            </div>{" "}
            <div>
              <h4>Skype Аудит</h4>
              <p>
                отдела продажи <span>и  CRM системы</span>
              </p>
            </div>{" "}
            <div>
              <h4>35 дней</h4>
              <p>
                использования <span>CRM</span>
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="section_button">
        <button>Получить консультацию</button>
      </div>
    </>
  );
};

export default Section;
