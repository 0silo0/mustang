// app/about/page.tsx - СТРАНИЦА "О КОМПАНИИ"

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="container">
        {/* Хлебные крошки */}
        <nav className="breadcrumbs">
          <Link href="/" className="breadcrumb-link">Главная</Link>
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-current">О компании</span>
        </nav>

        {/* Заголовок */}
        <h1 className="page-title">О компании</h1>

        {/* Основной контент */}
        <div className="about-content">
          <section className="about-section">
            <p className="about-intro">
              Компания «ТК Мустанг59» является надежным поставщиком услуг строительной, 
              дорожной и грузовой техники. Мы предоставляем своим клиентам в аренду 
              около 30 видов различной спецтехники. Всего более 150 единиц, предназначенных 
              для решения практически любой задачи в области строительства, благоустройства, 
              погрузочно-разгрузочных, высотных работ и грузоперевозок. Весь спектр услуг 
              вы сможете заказать в одном месте.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-title">Наши преимущества</h2>
            <div className="advantages-grid">
              <div className="advantage-card">
                <div className="advantage-icon">👥</div>
                <h3 className="advantage-title">Профессиональная команда</h3>
                <p className="advantage-text">
                  Одна из сильных сторон — это сотрудники нашей компании. На каждом этапе 
                  взаимодействия вы будете работать с профессионалами: от первого звонка 
                  менеджеру по продажам до выполнения работ машинистом.
                </p>
              </div>

              <div className="advantage-card">
                <div className="advantage-icon">⚡</div>
                <h3 className="advantage-title">Эффективность и экономия</h3>
                <p className="advantage-text">
                  Все наши сотрудники стараются решить задачу клиента максимально эффективно 
                  с точки зрения и временных, и финансовых затрат. Практически всегда этот 
                  сервис позволяет нашим клиентам экономить, получая качественные услуги.
                </p>
              </div>

              <div className="advantage-card">
                <div className="advantage-icon">🕒</div>
                <h3 className="advantage-title">Круглосуточная работа</h3>
                <p className="advantage-text">
                  Для компании «Мустанг59» не существует понятия «Вы позвонили в нерабочее время». 
                  Мы принимаем заявки на услуги аренды спецтехники фактически круглосуточно.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2 className="section-title">С кем мы работаем</h2>
            <div className="clients-grid">
              <div className="client-type">
                <div className="client-icon">🏢</div>
                <h3 className="client-title">Крупные предприятия</h3>
                <p className="client-text">
                  Долгосрочное сотрудничество с промышленными и строительными компаниями
                </p>
              </div>

              <div className="client-type">
                <div className="client-icon">🏪</div>
                <h3 className="client-title">Малый бизнес</h3>
                <p className="client-text">
                  Индивидуальный подход для представителей малого и среднего бизнеса
                </p>
              </div>

              <div className="client-type">
                <div className="client-icon">👨‍💼</div>
                <h3 className="client-title">Частные клиенты</h3>
                <p className="client-text">
                  Доступные услуги для физических лиц и индивидуальных проектов
                </p>
              </div>
            </div>

            <div className="cooperation-cta">
              <p className="cta-text">
                Будем рады сотрудничеству с крупными предприятиями, представителями 
                малого бизнеса и частными клиентами!
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}