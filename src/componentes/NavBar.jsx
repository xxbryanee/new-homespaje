import burgerMenu from '../assets/images/icon-menu.svg';

export const NavBar = () => {
  return (
    <>
        <ul className=" hidden sm:flex text-[18px]
            sm:w-[438px] sm:place-content-around sm:text-[16px]
            sm:items-center">
            <li>
                <a href="#">Noticias</a>
            </li>
            <li>
                <a href="#">Avisos de trabajo</a>
            </li>
            <li>
                <a href="#">Grupo de Wasapth</a>
            </li>
            <li>
                <a href="#">venta</a>
            </li>
        </ul>

        <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="menu" />
    </>
  )
}