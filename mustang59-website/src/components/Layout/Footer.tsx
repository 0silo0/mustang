// components/Layout/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Основные разделы */}
        <div className="footer-content">
          {/* Объединенная колонка: Компания и Клиентам */}
          <div className="company-client-section">
            {/* Компания */}
            <div className="footer-section">
              <h3>Компания</h3>
              <ul className="footer-links">
                <li><a href="/about">О нас</a></li>
                <li><a href="/partners">Наши партнёры</a></li>
                <li><a href="/reviews">Отзывы</a></li>
              </ul>
            </div>

            {/* Клиентам */}
            <div className="footer-section">
              <h3>Клиентам</h3>
              <ul className="footer-links">
                <li><a href="/privacy">Политика конфиденциальности</a></li>
                <li><a href="/agreement">Пользовательское соглашение</a></li>
                <li><a href="/sitemap">Карта сайта</a></li>
              </ul>
            </div>
          </div>

          {/* Аренда спецтехники */}
          <div className="footer-section">
            <h3>Аренда спецтехники</h3>
            <ul className="footer-links multi-column">
              <li><a href="/catalog/avtovyshka">Автовышка</a></li>
              <li><a href="/catalog/avtokran">Автокран</a></li>
              <li><a href="/catalog/manipulyator">Манипулятор</a></li>
              <li><a href="/catalog/mini-pogruzchik">Мини-погрузчик</a></li>
              <li><a href="/catalog/frontalny-pogruzchik">Фронтальный погрузчик</a></li>
              <li><a href="/catalog/mini-excavator">Мини-экскаватор</a></li>
              <li><a href="/catalog/excavator-pogruzchik">Экскаватор-погрузчик</a></li>
              <li><a href="/catalog/kolesny-excavator">Колесный экскаватор</a></li>
              <li><a href="/catalog/gusenichny-excavator">Гусеничный экскаватор</a></li>
              <li><a href="/catalog/gidromolot">Гидромолот</a></li>
              <li><a href="/catalog/samosval">Самосвал</a></li>
              <li><a href="/catalog/buldozer">Бульдозер</a></li>
              <li><a href="/catalog/greyder">Грейдер</a></li>
              <li><a href="/catalog/katok">Грунтовый каток</a></li>
              <li><a href="/catalog/bortovoy">Бортовой автомобиль</a></li>
              <li><a href="/catalog/tral">Трал</a></li>
              <li><a href="/catalog/yamobur">Ямобур</a></li>
            </ul>
          </div>

          {/* Услуги */}
          <div className="footer-section">
            <h3>Услуги</h3>
            <ul className="footer-links">
              <li><a href="/services/earthworks">Земляные работы</a></li>
              <li><a href="/services/road-improvement">Благоустройство дорог и прилегающих территорий</a></li>
              <li><a href="/services/demolition">Демонтаж и снос зданий, сооружений</a></li>
              <li><a href="/services/transportation">Перевозка тяжеловесных и негабаритных грузов</a></li>
              <li><a href="/services/tree-removal">Корчевание пней, спил веток/деревьев</a></li>
              <li><a href="/services/drilling">Бурение отверстий, установка/выемка столбов, винтовые сваи</a></li>
              <li><a href="/services/cleaning">Уборка и вывоз мусора/снега</a></li>
              <li><a href="/services/delivery">Доставка гравия, щебня, песка и других сыпучих материалов</a></li>
              <li><a href="/services/cargo">Грузоперевозки</a></li>
            </ul>
          </div>
        </div>

        {/* Контакты и соцсети */}
        <div className="footer-contacts">
          <div className="contact-block">
            <h4>Контакты</h4>
            <div className="contact-info">
              <a href="tel:+79048474909" className="contact-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +7 (904) 847-49-09
              </a>
              <a href="mailto:mustang.159@mail.ru" className="contact-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                mustang.159@mail.ru
              </a>
              <div className="contact-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
                Пермь, ул. Промышленная, 123
              </div>
            </div>
          </div>

          <div className="contact-block">
            <h4>Режим работы</h4>
            <div className="contact-info">
              <div className="contact-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                Пн-Пт: 9:00-18:00
              </div>
              <div className="contact-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                Суббота: 10:00-16:00
              </div>
              <div className="contact-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                Воскресенье: выходной
              </div>
            </div>
          </div>

          <div className="contact-block">
            <h4>Свяжитесь с нами</h4>
            <div className="social-links">
              <a href="https://wa.me/79048474909" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.243-1.635a11.882 11.882 0 005.74 1.479h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49"/>
                </svg>
              </a>
              <a href="https://t.me/mustang59" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              <a href="viber://chat?number=79048474909" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.155 13.893c.716-6.027-.344-9.832-2.256-11.553l.001-.001c-3.086-2.939-13.508-3.374-17.2.132-4.714 4.291-4.46 10.739-.375 14.528-1.526 1.378-1.942 2.248-2.067 3.477-.172 1.688.563 2.736 1.585 2.791 1.02.055 2.16-.441 3.152-1.635.736.255 1.48.487 2.232.685 3.343.893 9.267.687 11.881-2.252 1.86-2.13 2.779-5.228 2.047-7.172zm-12.237 5.477c-1.258 0-2.28-1.023-2.28-2.28s1.022-2.28 2.28-2.28 2.28 1.023 2.28 2.28-1.022 2.28-2.28 2.28zm6.62 0c-1.258 0-2.28-1.023-2.28-2.28s1.022-2.28 2.28-2.28 2.28 1.023 2.28 2.28-1.022 2.28-2.28 2.28z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ООО «ТК Мустанг59». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}