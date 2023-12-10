import React from "react";
import "./Footer.scss";
import telegram from "../../assets/images/telegram.svg";
import phone from "../../assets/images/viber.svg";
import whatsapp from "../../assets/images/whatsapp.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="about">
          <div className="company">
            <p>О компании</p>
            <ul>
              <li>Партнёрская программа</li>
              <li>Вакансии</li>
            </ul>
          </div>
          <div className="company__links">
            <div>
              <p>Меню</p>
              <ul>
                <li>Расчёт стоимости</li>
                <li>Услуги</li>
                <li>Виджеты</li>
                <li>Интеграции</li>
                <li>Наши клиенты</li>
              </ul>
            </div>
            <div className="menu">
              <p></p>
              <ul>
                <li>Кейсы</li>
                <li>Благодарственные письма</li>
                <li>Сертификаты</li>
                <li>Блог на Youtube</li>
                <li>Вопрос / Ответ</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contacts">
          <div className="contact">
            <p>Контакты</p>
            <ul>
              <li>+7 555 555-55-55</li>
              <li>
                <div>
                  <img src={telegram} alt="" />
                  <img src={phone} alt="" />
                  <img src={whatsapp} alt="" />
                </div>
              </li>
              <li>Москва, Путевой проезд 3с1, к 902</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__text">
        <div>
          <p>©WELBEX 2022. Все права защищены.</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
