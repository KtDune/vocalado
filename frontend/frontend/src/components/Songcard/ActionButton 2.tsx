import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import React from "react"

interface ActionButtonProps {
    icon: IconProp
    onClick: () => void
    stats: string
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {

    const buttonStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        padding: '8px 12px',
        cursor: 'pointer'
    }

    const iconStyle: React.CSSProperties = {
        color: 'white',
        marginRight: '0.5rem'
    }

    const pStyle: React.CSSProperties = {
        margin: '0',
        color: 'white'
    }

    return (
        <button className="btn " style={buttonStyle} onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon} style={iconStyle} />
            <p style={pStyle}>{props.stats}</p>
        </button>
    )
}

export default ActionButton
