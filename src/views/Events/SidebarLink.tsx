import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    text: string, 
    icon: React.ReactElement,
    link: string,
}
// SidebarLink() is a React functional component that returns a link in the sidebar, used in the Navigation component.
const SidebarLink: React.FC<Props> = ({text, icon, link}: Props) => {
    return (
        <li className='flex flex-row items-center gap-3 lg:text-lg xl:text-xl xl:gap-4 '>
            {icon}
            <Link to={link}>{text}</Link>
        </li>
    )
}

export default SidebarLink