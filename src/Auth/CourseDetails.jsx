import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { fetchAdminRequest, fetchRequest, getCookie } from '../Constant/fetchRequest';
import { Button, Loader } from 'rsuite';
import { useNavigate } from 'react-router-dom';

const CourseDetails = ({ courseName }) => {
    const [errorMsg, setErrorMsg] = useState("");
    const [SuccessMsg, setSuccessMsg] = useState("");
    const [testDetails, setTestDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [isPurchased, setIsPurchased] = useState(false);
    useEffect(() => {
        setErrorMsg("")
        courseName && fetchAdminRequest(
            `${import.meta.env.VITE_API_URL}/questions/${courseName}`, "POST", {
            adminId: import.meta.env.VITE_ADMIN_USERNAME
        }
        ).then(res => {
            if (res.code === 200) {
                setTestDetails(res.data.question)
            }
        }).catch(err => {
            err.code === "ERR_NETWORK" && setErrorMsg("Network Error");
            err.code === "ERR_BAD_REQUEST" && setErrorMsg(err?.response?.data?.message);
        }).finally(() => {
            setLoading(false)
        })
        fetchRequest(`${import.meta.env.VITE_API_URL}/purchase/`, "POST", {
            userId: getCookie("userId"),
            courseName: courseName,
        }).then(res => {
            if (res.code === 200) {
                setIsPurchased(res.data.IsPurchased)
            }
        }).catch(err => {
            err.code === "ERR_NETWORK" && setErrorMsg("Network Error");
            err.code === "ERR_BAD_REQUEST" && setErrorMsg(err?.response?.data?.message);
        }).finally(() => {
            setLoading(false)
        })
    }, [courseName])
    const purchaseHandler = () => {
        if (isPurchased) {
            setSuccessMsg("Already Purchased")
        } else {
            setErrorMsg("Please Purchase Before Taking Test")
        }
    }
    return (
        <div className='TestSeries shadow-3d-light max-w mx-auto mt mb padding-sm radius-1' style={{ "--mwValue": 120, "--value": 3 }}>
            <h2 className="tac t-primary mb">Test Full Details</h2>
            {
                loading ? <Loader /> : <>
                    <h4 className="t-bold mb">
                        Test Name : <span className="t-warning">
                            {testDetails?.name}
                        </span>
                    </h4>
                    <h4 className="t-bold t-capitalize mb">
                        Description : <span className="t-warning">
                            {testDetails?.description}
                        </span>
                    </h4>
                    <h4 className="t-bold mb">
                        Year : <span className="t-warning">
                            {testDetails?.year}
                        </span>
                    </h4>
                    <h4 className="t-bold mb">
                        Other Details : <span className="t-warning">
                            {testDetails?.other}
                        </span>
                    </h4>
                    <h4 className="t-bold mb">
                        Total Questions : <span className="t-warning">
                            {testDetails?.length}
                        </span>
                    </h4>
                    <h4 className="t-bold mb">
                        Total time for Exam: <span className="t-warning">
                            {
                                testDetails?.length
                            } Minutes
                        </span>
                    </h4>
                    <div className="line"></div>
                    <h3 className='t-bold'>
                        Purchase Details : <span className="t-danger">
                            {isPurchased ? "Purchased" : "Not Purchased"}
                        </span>
                    </h3>
                    <h3 className="t-bold">
                        Price : <span className="t-danger">
                            &#8377;{99}
                        </span>
                    </h3>
                    {
                        !isPurchased ? <Button appearance="primary" size='lg' className='mt ml' onClick={() => purchaseHandler()}>Purchase</Button> : <Button appearance="primary" size='lg' className='mt ml' onClick={() => navigate(`/account/test/${testDetails._id}`)}>Take Test</Button>
                    }
                    {
                        SuccessMsg && <p className="t-success mt ml mb t-bold padding-sm radius-1" style={{ backgroundColor: "rgba(0, 255, 0, 0.3)" }}>{SuccessMsg}</p>
                    }
                </>
            }
            {
                errorMsg && <p className="t-danger mt ml mb t-bold padding-sm radius-1" style={{ backgroundColor: "rgba(255, 0, 0, 0.3)" }}>{errorMsg}</p>
            }
        </div>
    )
}

export default CourseDetails

CourseDetails.propTypes = {
    courseName: PropTypes.string.isRequired,
}