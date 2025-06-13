

export const Article = ({title, subtitle, description, image}) => {
  return (
    <article className='flex h-[162px]'>
       <div className='w-[100px] flex-none'>
        <img src={image} alt="" />
       </div>

       <div className='pl-6'>
            <p className='text-GrayishBlue text-3xl mb-[18px] font-bold'>{title}</p>
            <h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer'>{subtitle}</h2>
            <p className='text-VeryDarkBlue'>{description}</p>

       </div>
    </article>
  )
}

