interface PersonalDetailsProps {
    content: {
        src: string,
        alt: string,
        style: React.CSSProperties
    }
}

interface TextboxProps {
    content: {
        className: string,
        text: string,
        style: React.CSSProperties
    }
}

export const PersonalDetailsImage: React.FC<PersonalDetailsProps> = ({content}) => {
    const {src, alt, style} = content

    return (
        <img src={src} alt={alt} className="img-fliud" style={style}/>
    )
}

export const PersonalDetailsLabel: React.FC<TextboxProps> = ({content}) => {
    const {className, text, style} = content

    return (

        <p className={className} style={style}>{text}</p>
    )
}


