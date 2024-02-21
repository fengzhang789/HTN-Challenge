import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import { Exit } from "react-flaticons";


const FullscreenMenu: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();

  return (
    <nav className='h-screen w-screen fixed top-0 left-0 bg-secondary z-10'>
      {/* EXITING */}
      <button className="absolute top-[5%] left-[10%]" onClick={() => toggle()}>
        <Exit />
      </button>

      <ul className="flex flex-col w-full h-full items-center pt-[25%] text-xl">
        <li className="my-5">
          <Link className="bg-bgSecondary font-bold" to='/'>Home</Link>
        </li>
        <li className="my-5">
          <Link className="bg-bgSecondary font-bold" to='/events'>Events</Link>
        </li>
        <li className="my-5">
          {isAuthenticated ? (
            <Link className="bg-bgSecondary font-bold" to='/'><button onClick={() => logout()}>Logout</button></Link>
          ) : (
            <Link className="bg-bgSecondary font-bold" to='/'><button onClick={() => loginWithPopup()}>Login</button></Link>
          )}
        </li>

      </ul>
    </nav>
  )
}

export default FullscreenMenu