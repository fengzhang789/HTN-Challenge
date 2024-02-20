import LoginButton from './ui/LoginButton'
import PrimaryButton from './ui/PrimaryButton'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="">
        <div className='w-full px-5 py-5 flex flex-row justify-between items-center bg-bgPrimary
                        sm:px-8 md:px-12 lg:px-16 xl:px-20 xl:py-6'>
            <header className='inline'>
              <Link to="/">
                <img src={logo} alt='Hackathon logo' className="h-8 sm:h-10 lg:h-12"></img>
              </Link>
            </header>

            <div className='inline flex flex-row gap-4 sm:gap-6 xl:gap-8'>
              <LoginButton />
              <PrimaryButton text='Events' link='/events'/>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar