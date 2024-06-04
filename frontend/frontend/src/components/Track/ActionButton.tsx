interface ActionButtonProps {
    id: string
    imageUrl: string
    alt: string
    onClick: (id:string) => void
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {

const buttonStyle = {
    backgroundColor: '#000000'
}

    return (
        <button className="btn-primary" style={buttonStyle} id={props.id} onClick={() => props.onClick(props.id)}>
            <img src={props.imageUrl} alt={props.alt} />
        </button>
    )
}

export default ActionButton