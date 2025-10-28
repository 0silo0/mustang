'use client';

import { useState } from 'react';

export default function UrgentOrder() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log('Phone:', phone);
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setPhone('');
  };

  return (
    <section className="urgent-order">
      <div className="urgent-order-container">
        <div className="urgent-order-content">
          {/* Левая часть - текст */}
          <div className="urgent-order-info">
            <h2 className="urgent-order-title">Срочный заказ спецтехники</h2>
            <div className="urgent-order-description">
              <p>Вы можете выбрать сами, а можете довериться профессионалам.</p>
              <p>Квалифицированный менеджер подберет спецтехнику в зависимости от условий работы.</p>
              <p>Консультация бесплатна и ни к чему вас не обязывает.</p>
            </div>
          </div>

          {/* Правая часть - контакты и форма */}
          <div className="urgent-order-contact">
            <div className="urgent-order-phone">
              <span className="phone-icon">📞</span>
              <a href="tel:+73952940100" className="phone-number">
                +7 (3952) 940-100
              </a>
            </div>
            
            <form onSubmit={handleSubmit} className="urgent-order-form">
              <input
                type="tel"
                placeholder="Введите ваш телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="phone-input"
                required
              />
              <button type="submit" className="order-button">
                Оставить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}