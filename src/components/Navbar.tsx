import LoginAndLogoutButton from './ui/LoginAndLogoutButton'
import PrimaryButton from './ui/PrimaryButton'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import useIsMenuOpen from '../hooks/useIsMenuOpen'
import { MenuBurger } from 'react-flaticons'
import { useState } from 'react'
import FullscreenMenu from './FullscreenMenu'

// Navbar() is a React functional component that returns the navigation bar.
const Navbar: React.FC = () => {
  const hamburgerMenu = useIsMenuOpen();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  console.log(isMenuOpen)

  return (
    <nav className="">
      {!isMenuOpen ? (
        // IF THE MENU IS CLOSED, THE NAVBAR IS RETURNED
        <div className='w-full px-5 py-5 flex flex-row justify-between items-center bg-bgPrimary
                        sm:px-8 md:px-12 lg:px-16 xl:px-20 xl:py-6'>
            <header className='inline'>
              <Link to="/">
                <img src={logo} alt='Hackathon logo' className="h-8 sm:h-10 lg:h-12 hover-expand"></img>
              </Link>
            </header>

            {/* IF THE DEVICE IS MOBILE, SHOW THE HAMBURGER MENU INSTEAD */}
            {!hamburgerMenu ? (
              <MenuBurger className="w-8 sm:w-10 lg:w-12" onClick={() => setIsMenuOpen(true)} />
            ) : (
              <div className='inline flex flex-row gap-4 sm:gap-6 xl:gap-8'>
                <LoginAndLogoutButton />
                <PrimaryButton text='Events' link='/events'/>
              </div>
            )}
        </div>
        ) : (
          <FullscreenMenu toggle={() => setIsMenuOpen(!isMenuOpen)} />
        )}
    </nav>
    
  )
}

export default Navbar