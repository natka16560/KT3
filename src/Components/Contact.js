import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">У вас остались вопросы?</h1>
      <h1 className="primary-heading">Напишите нам!</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Отправить</button>
      </div>
    </div>
  );
};

export default Contact;
