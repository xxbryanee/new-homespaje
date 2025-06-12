import imageMobile from '../assets/images/image-web-3-mobile.jpg';
import imageDesktop from '../assets/images/image-web-3-desktop.jpg';

export const MainArticle = () => {
  return (
    <section>
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile}/>
        <source media="(max-width: 641px)" srcSet={imageDesktop}/>
        <img src={imageMobile} alt="Articulo principal imagen" />
      </picture>

      <div className='sm:flex'>
          <div className='flex-1 py-6'>
            <h1 className='text-[40px] font-bold sm:text-[58px] leading-none'>The Bright Future of Web 3.0?</h1>
        </div>

        <div className='flex-1 pt-9'>
            <p className='text-[13px] mb-10 sm:text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            </p>
            <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue'>Lee aqui</button>
        </div>
      </div>
      
      
    </section>
  )
}

