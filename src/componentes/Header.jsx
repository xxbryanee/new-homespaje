import { HamburgerMenu } from './HamburgerMenu';
import { NavBar } from './NavBar';
import logo from '../assets/images/logo.svg';

export const Header = () => {
  return (
    <header className="flex items-center justify-between mb-8">
      <img src={logo} alt="Logo" />

      {/* Menú hamburguesa solo en móviles */}
      <div className="sm:hidden">
        <HamburgerMenu />
      </div>

      {/* NavBar solo en pantallas medianas y grandes */}
      <div className="hidden sm:block">
        <NavBar />
      </div>
    </header>
  )
}