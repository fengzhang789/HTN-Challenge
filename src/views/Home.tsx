import LoginButton from '../components/buttons/LoginButton'
import PrimaryButton from '../components/buttons/PrimaryButton'
import vite from '../../public/vite.svg'

// Home() is a React functional component that returns the homepage of the app.
const Home = () => {
  return (
    <main>
      <div className='w-screen px-5 py-5 flex flex-row justify-between items-center bg-background'>
        <div className='inline'>
          <img src={vite} alt='Hackathon logo'></img>
        </div>

        <div className='inline flex flex-row gap-4'>
          <LoginButton />
          <PrimaryButton text='Events'/>
        </div>
      </div>
    </main>
    
  )
}

export default Home