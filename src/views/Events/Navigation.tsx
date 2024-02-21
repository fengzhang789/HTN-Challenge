import React from 'react'
import SidebarLink from "./SidebarLink";
import LoginButton from "../../components/ui/LoginAndLogoutButton";
import logo from "../../assets/images/logo.png";
import Navbar from "../../components/Navbar";
import { Home, Calendar, Clock, Notebook } from 'react-flaticons'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// Navigation() is a React functional component that returns the sidebar or the navigation menu.
const Navigation: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean | null>(null);

    // Sets the isSideBarOpen state to true if the window width is greater than 768px (tablet)
    useEffect(() => {
        const handleResize = (): void => {
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return (): void => {
            window.removeEventListener('resize', handleResize);
        }; 
    }, [])

    return (
        <section className="left-dash bg-bgPrimary h-full top-0
                            md:fixed md:w-60 md:h-screen md:p-5 md:flex md:flex-col md:justify-between
                            lg:w-72 xl:w-80">
            {isSidebarOpen ? (
                <React.Fragment>
                    <div className="top-sidebar">
                        <header className="sidebar-header flex flex-row items-center gap-3 xl:gap-5">
                          <Link to="/">
                            <img src={logo} alt='Hackathon logo' className="h-8 sm:h-9 lg:h-10 xl:h-12 hover-expand"></img>
                          </Link>
                          <h3 className="text-text font-bold text-lg lg:text-xl xl:text-2xl">Hack the North</h3>
                        </header>

                        <nav className="Navigation text-text text-md font-bold py-8 px-3">
                        <ul className="flex flex-col gap-3">
                            <SidebarLink text="Home" icon={<Home />} link="/" />
                            <SidebarLink text="Events" icon={<Calendar />} link="/events" />
                            <SidebarLink text="Schedule" icon={<Clock />} link="/schedule" />
                            <SidebarLink text="Hacker Guide" icon={<Notebook />} link="/hacker-guide" />
                        </ul>
                        </nav>
                    </div>
                    
                    <div className="bottom-sidebar">
                        <LoginButton />
                    </div>
                </React.Fragment>
            ) : (
                <Navbar />
            )}
        </section>
    )
}

export default Navigation