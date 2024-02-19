import { useAuth0 } from '@auth0/auth0-react'

// LoginButton() is a React functional component that returns the log in button.
const LoginButton: React.FC = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <button className='bg-primary text-text py-1 px-4 rounded-lg
                           sm:py-2 sm:px-5 md:px-6 xl:text-lg' onClick={() => loginWithRedirect()}>
            Login
        </button>
    )
}

export default LoginButton