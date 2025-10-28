// app/catalog/page.tsx

import Link from 'next/link';
import SpecialEquipmentCatalog from '@/components/Home/SpecialEquipmentCatalog';

export default function CatalogPage() {
  return (
    <main className="catalog-page">
      <div className="container">
        {/* Хлебные крошки */}
        <nav className="breadcrumbs">
          <Link href="/" className="breadcrumb-link">Главная</Link>
          <span className="breadcrumb-separator">»</span>
          <span className="breadcrumb-current">Каталог спецтехники</span>
        </nav>

        {/* <h1 className="page-title">Каталог спецтехники</h1>

        <div className="catalog-intro">
          <p>
            В нашем каталоге представлена вся доступная спецтехника для аренды. 
            Выберите нужную категорию или ознакомьтесь со всем парком оборудования.
          </p>
        </div> */}

        <SpecialEquipmentCatalog />
      </div>
    </main>
  );
}