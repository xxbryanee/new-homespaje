import { useState } from "react";
import imageMobile1 from '../assets/images/image-web-3-mobile.jpg';
import imageDesktop1 from '../assets/images/image-web-3-desktop.jpg';
// Puedes agregar más imágenes si tienes más slides
import imageMobile2 from '../assets/images/image-retro-pcs.jpg';
import imageDesktop2 from '../assets/images/image-top-laptops.jpg';

const slides = [
  {
    imageMobile: imageMobile1,
    imageDesktop: imageDesktop1,
    title: "The Bright Future of Web 3.0?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.",
  },
  {
    imageMobile: imageMobile2,
    imageDesktop: imageDesktop2,
    title: "La revolución de las PCs retro",
    text: "Descubre cómo las PCs antiguas están volviendo con fuerza en la era moderna.",
  },
];

export const MainArticle = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const { imageMobile, imageDesktop, title, text } = slides[current];

  return (
    <section className='mb-12'>
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img
          src={imageMobile}
          alt="Articulo principal imagen"
          className='w-full h-[200px] object-cover'
        />
      </picture>

      <div className='sm:flex'>
        <div className='flex-1 py-6'>
          <h1 className='text-[40px] font-bold sm:text-[58px] leading-none'>{title}</h1>
        </div>
        <div className='flex-1 pt-9'>
          <p className='text-[13px] mb-10 sm:text-[16px]'>{text}</p>
          <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue'>Lee aquí</button>
        </div>
      </div>

      {/* Controles del slide */}
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Anterior</button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Siguiente</button>
      </div>
    </section>
  );
};
