import { NavBar } from './NavBar';
import logo from '../assets/images/logo.svg';


export const Header = () => {

  return (
    <header className="flex  items-center place-content-between mb-8">
      <img src={logo} alt = "Logo" /> 
      
        

      <NavBar/>

    </header>
  )
}