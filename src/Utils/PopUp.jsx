import { AiTwotoneMail, AiFillCloseCircle } from "react-icons/ai"
import PropTypes from 'prop-types'
const PopUp = ({ setIsShown }) => {
    return (
        <div className="fixed-center padding-md radius-2" style={{backgroundColor:"var(--dark",boxShadow:"0 0 20px rgba(0,0,0,0.7"}}>
            <div className="pop-content">
                <h2>Contact Us</h2>
                <hr />
                <p>
                    If you&apos;d like to send us some feedback, would like to advertise
                    with us or become an author on our blog, you can email us at
                </p>
                <p className="flex align-center">
                    <AiTwotoneMail />&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
                    <a href="mailto:officialvineet@yahoo.com" style={{ fontStyle: "italic" }} className="t-bold">
                        officialvineet@yahoo.com
                    </a>
                </p>
                <p>We read every email and usually reply within one business day.</p>{" "}
                <p>
                    <hr />
                    <b>
                        Please note that due to the high number of inquiries that we
                        receive, we can only reply to relevant propositions. Thank you.
                    </b>
                </p>
                <AiFillCloseCircle onClick={() => setIsShown(false)} className="pointer flex ml-auto mt" style={{ fontSize: "2rem" }} />
            </div>
        </div>
    )
}

export default PopUp
PopUp.propTypes = {
    setIsShown: PropTypes.func.isRequired,
}