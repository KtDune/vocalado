interface PersonalDetailsProps {
    content: string
}

export const PersonalDetailsImage: React.FC<PersonalDetailsProps> = (props) => {
const PersonalDetailsImageStyle = {
    backgroundColor: '#FFFFFF',
    width: '15rem',
    height: '15rem'
}

    return (
        <img src={props.content} alt="cover profile pic" className="img-fliud" style={PersonalDetailsImageStyle}/>
    )
}

export const PersonalDetailsLabel: React.FC<PersonalDetailsProps> = (props) => {
    const PersonalDetailsLabelStyle = {
        backgroundColor: '#291D36',
        color: '#FFFFFF',
        padding: '0.7rem'
    }

    return (

        <h1 style={PersonalDetailsLabelStyle}>{props.content}</h1>
    )
}

export const PersonalDetailsLocation: React.FC<PersonalDetailsProps> = (props) => {
    const PersonalDetailsLocationStyle = {
        backgroundColor: '#291D36',
        color: '#FFFFFF',
        padding: '0.5rem'
    }

    return (

        <h4 style={PersonalDetailsLocationStyle}>{props.content}</h4>
    )
}


