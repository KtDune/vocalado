import ActionButton from "./ActionButton"
import {faHeart, faComment, faRetweet, faShare} from '@fortawesome/free-solid-svg-icons'

const ActionButtonGroup: React.FC = () => {

    const ph = () => {}

    return (
        <div className="row mt-3">
            <div className="col">
                <ActionButton icon={faHeart} onClick={ph} stats="100" />
            </div>
            <div className="col">
                <ActionButton icon={faRetweet} onClick={ph} stats="100" />
            </div>
            <div className="col">
                <ActionButton icon={faShare} onClick={ph} stats="100" />
            </div>
            <div className="col">
                <ActionButton icon={faComment} onClick={ph} stats="100" />
            </div>
        </div>
    )
}

export default ActionButtonGroup