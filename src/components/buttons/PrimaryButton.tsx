type Props = {
    text: string
    onClick?: () => void;
}

// PrimaryButton() is a React functional component that returns the log in button.
const PrimaryButton = (props: Props) => {
    return (
        <button className='bg-primary text-text py-1 px-4 rounded-lg' onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default PrimaryButton