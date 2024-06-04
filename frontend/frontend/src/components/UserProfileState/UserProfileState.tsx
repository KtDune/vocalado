interface QuoteProp {
    context: string
}

const Quote: React.FC<QuoteProp> = ({context}) => {
    const QuoteStyle = {
        minHeight: "5rem"
    }

    return (
        <div className="text-break">
            <p className="text-white mt-1" style={QuoteStyle}>{context}</p>
        </div>
    )
}

interface FollowCountProp {
    title: string
    value: number
}

const FollowCount: React.FC<FollowCountProp> = ({title, value}) => {
    return (
        <div>
                <p className="text-white">{title}</p>
                <h3 className="text-white">{value}</h3>
            </div>
    )
} 

const UserProfileState: React.FC = () => {
    const UserProfileStateStyle = {
        backgroundColor: "#00436C",
        padding: "2rem"
    }

    return (
        <div style={UserProfileStateStyle}>
            <div className="row">
                <div className="col">
                    <FollowCount title="Followers" value={2000} />
                </div>
                <div className="col">
                    <FollowCount title="Following" value={32} />
                </div>
            </div>
            <Quote context="Hi 😀" />
        </div>
    )
}

export default UserProfileState