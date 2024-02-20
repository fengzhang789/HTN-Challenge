import { useEffect, useState } from "react";
import { gql, request } from "graphql-request";
import logo from "../../assets/images/logo.png";
import Navbar from "../Home/Navbar";
import { Home, Calendar } from 'react-flaticons'
import SidebarLink from "./SidebarLink";

// Events is a React functional component that returns the events page of the app.
const Events: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean | null>(null);

  useEffect((): void => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    // Sets the initial state of the sidebar
    handleResize();

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <main className="events flex flex-col w-screen min-h-screen
                     lg:flex-row">
      {/* LEFT DASHBOARD */}
      <section className="left-dash bg-bgPrimary h-full
                          md:w-60 md:h-screen md:p-5
                          lg:w-72 xl:w-80">
        {isSidebarOpen ? (
          <>
            <header className="sidebar-header flex flex-row items-center gap-3 xl:gap-5">
              <img src={logo} alt='Hackathon logo' className="h-8 sm:h-9 lg:h-12"></img>
              <h3 className="text-text font-bold text-lg lg:text-xl xl:text-2xl">Hack the North</h3>
            </header>

            <nav className="Navigation text-text text-md font-bold py-8 px-3">
              <ul className="flex flex-col gap-3">
                <SidebarLink text="Home" icon={<Home />} link="/" />
                <SidebarLink text="Events" icon={<Calendar />} link="/events" />
              </ul>
            </nav>
          </>
        ): (
          <Navbar />
        )}
      </section>

      {/* RIGHT DASHBOARD */}
      <section className="right-dash bg-bgSecondary h-full">
        
      </section>
    </main>
  )
}

export default Events