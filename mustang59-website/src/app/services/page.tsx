import Link from 'next/link';
import Services from '@/components/Home/Services';

export default function ServicesPage() {
  return (
    <main className="services-page">
      <div className="container">
        {/* Хлебные крошки */}
        <nav className="breadcrumbs">
          <Link href="/" className="breadcrumb-link">Главная</Link>
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-current">Услуги</span>
        </nav>

        <Services />
      </div>
    </main>
  );
}