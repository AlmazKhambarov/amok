import React from "react";
import logo from "../../assets/images/logo.png";
import "./Header.scss";
import telegram from "../../assets/images/telegram.svg";
import phone from "../../assets/images/viber.svg";
import whatsapp from "../../assets/images/whatsapp.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__navlink">
        <div className="header__logo">
          <img src={logo} alt="" />
          <p>
            крупный интегратор CRM <span>в Росcии и ещё 8 странах </span>
          </p>
        </div>
        <ul>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Кейсы</li>
          <li>Сертификаты</li>
        </ul>
      </div>
      <div className="header__contact">
        <ul className="nav__ul">
          <li>
            <a href="tel:+75555555555">+7 555 555-55-55</a>
          </li>
          <li>
            <img src={telegram} alt="" />
          </li>
          <li>
            <img src={phone} alt="" />
          </li>
          <li>
            <img src={whatsapp} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
