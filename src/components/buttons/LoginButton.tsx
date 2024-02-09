import { useAuth0 } from '@auth0/auth0-react'

// LoginButton() is a React functional component that returns the log in button.
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <button className='bg-primary text-text py-1 px-4 rounded-lg' onClick={() => loginWithRedirect()}>
            Login
        </button>
    )
}

export default LoginButton