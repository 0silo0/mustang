// app/gallery/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import galleryData from '@/data/technika.json';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % galleryData.images.length;
    setSelectedImage(galleryData.images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + galleryData.images.length) % galleryData.images.length;
    setSelectedImage(galleryData.images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  // Закрытие по ESC
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'ArrowLeft') {
      goToPrev();
    }
  };

  return (
    <>
      <main className="gallery-page" onKeyDown={handleKeyDown} tabIndex={0}>
        <div className="container">
          {/* Хлебные крошки */}
          <nav className="breadcrumbs">
            <Link href="/" className="breadcrumb-link">Главная</Link>
            <span className="breadcrumb-separator">»</span>
            <span className="breadcrumb-current">Фотогалерея</span>
          </nav>

          {/* Заголовок */}
          <h1 className="page-title">Фотогалерея</h1>

          {/* Описание */}
          <div className="gallery-intro">
            <p>В нашей фотогалерее вы можете ознакомиться с техникой, доступной для аренды. 
            Весь парк оборудования содержится в отличном техническом состоянии и готов к работе.</p>
          </div>

          {/* Галерея */}
          <div className="gallery-grid">
            {galleryData.images.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openModal(image, index)}
              >
                <div className="image-container">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={500}
                    className="gallery-image"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="image-overlay">
                    <div className="image-info">
                      <h3 className="image-title">{image.title}</h3>
                      <span className="image-category">{image.category}</span>
                    </div>
                    <div className="zoom-icon">🔍</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Подпись */}
          <div className="gallery-footer">
            <p>Хотите увидеть больше? Свяжитесь с нами для получения полного каталога техники!</p>
          </div>
        </div>
      </main>

      {/* Модальное окно для предпросмотра */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <button className="modal-nav modal-prev" onClick={goToPrev}>
              ‹
            </button>
            
            <div className="modal-image-container">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="modal-image"
              />
              <div className="modal-info">
                <h3 className="modal-title">{selectedImage.title}</h3>
                <span className="modal-category">{selectedImage.category}</span>
                <div className="modal-counter">
                  {currentIndex + 1} / {galleryData.images.length}
                </div>
              </div>
            </div>
            
            <button className="modal-nav modal-next" onClick={goToNext}>
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}