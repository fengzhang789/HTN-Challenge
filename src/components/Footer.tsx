import React from 'react';

// Footer() is a React functional component that returns the footer of the website.
const Footer: React.FC = ()  => {
    return (
        <footer className='w-full bg-bgSecondary text-center'>
            <p className="text-text text-md font-bold py-4
                          md:text-lg md:py-6 xl:py-8 xl:text-xl">Made with ❤️ by the Hack the North team</p>
        </footer>
    );
};

export default Footer;