import { Link } from "react-router-dom"

type Props = {
    text: string,
    link?: string,
}

// PrimaryButton() is a React functional component that returns the log in button.
const PrimaryButton = (props: Props) => {
    const { link, text } = props;

    if (link) {
        return (
            <Link to={link}>
                <button className='bg-primary text-text py-1 px-4 rounded-lg
                                   sm:py-2 sm:px-5 md:px-6 xl:text-lg'>
                    {text}
                </button>
            </Link>
        );
    } else {
        return (
            <button className='bg-primary text-text py-1 px-4 rounded-lg
                               sm:py-2 sm:px-5 md:px-6 xl:text-lg'>
                {text}
            </button>
        );
    }
}

export default PrimaryButton