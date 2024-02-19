import LoginButton from './ui/LoginButton'
import PrimaryButton from './ui/PrimaryButton'
import vite from '../../public/vite.svg'

const Navbar: React.FC = () => {
  return (
    <nav>
        <div className='w-screen px-5 py-5 flex flex-row justify-between items-center bg-bgPrimary
                        sm:px-8 md:px-12 lg:px-16 xl:px-20 xl:py-6'>
            <header className='inline'>
                <img src={vite} alt='Hackathon logo'></img>
            </header>

            <div className='inline flex flex-row gap-4 sm:gap-6 xl:gap-8'>
                <LoginButton />
                <PrimaryButton text='Events' link='./events'/>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar