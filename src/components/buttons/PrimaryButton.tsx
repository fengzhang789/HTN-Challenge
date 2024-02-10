type Props = {
    text: string
    onClick?: () => void;
}

// PrimaryButton() is a React functional component that returns the log in button.
const PrimaryButton = (props: Props) => {
    return (
        <button className='bg-primary text-text py-1 px-4 rounded-lg
                           sm:py-2 sm:px-5 md:px-6 xl:text-lg' onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default PrimaryButton