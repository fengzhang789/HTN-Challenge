import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

// LoginAndLogoutButton() is a React functional component that returns the login/logout button.
const LoginAndLogoutButton: React.FC = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

    return (
      <React.Fragment>
        {isAuthenticated ? (
          // IF THE USER IS LOGGED IN, SHOW THE LOGOUT BUTTON
          <button className='bg-primary text-text py-1 px-4 rounded-lg hover-expand
                            sm:py-2 sm:px-5 md:px-6 xl:text-lg' onClick={() => logout()}>
              Logout
          </button>
        ) : (
          // IF THE USER IS NOT LOGGED IN, SHOW THE LOGIN BUTTON
          <button className='bg-primary text-text py-1 px-4 rounded-lg hover-expand
                            sm:py-2 sm:px-5 md:px-6 xl:text-lg' onClick={() => loginWithRedirect()}>
              Login
          </button>
        )}
      </React.Fragment>
      
    )
}

export default LoginAndLogoutButton