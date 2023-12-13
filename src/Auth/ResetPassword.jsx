import { Button } from "rsuite"
import FormInput from "../Utils/FormInput";
import { useCallback, useState } from "react";
import { fetchRequest } from "../Constant/fetchRequest";
const ResetPassword = () => {
    const [emailId, setEmailId] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const handleChange = useCallback((e) => {
        setErrorMsg('')
        setSuccessMsg('')
        setEmailId(e.target.value)
    }, [])
    const handleSubmit = async (event) => {
        setLoading(true)
        setErrorMsg('');
        setSuccessMsg('');
        event.preventDefault();
        fetchRequest(`${import.meta.env.VITE_API_URL}/verify/forgotPassword`, "POST", {
            emailId
        }).then(res => {
            res.code === 200 ? setSuccessMsg(res.message + " check your inbox !") : null
        }).catch(err => {
            err.response.request.status === 404 ? setErrorMsg("User Not Found") : setErrorMsg(err.message)
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }
    return (
        <section className="reset-password mt mb shadow-3d-light padding-sm max-w mx-auto radius-1" style={{ "--mwValue": 120 }}>
            <h1 className="mb tac t-primary">
                Reset Password Form
            </h1>
            <div className="max-w mt mx-auto mb">
                <form method="POST" id="reset-password-form" onSubmit={handleSubmit}>
                    <FormInput name="emailId" label="Email" placeholder="Email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required type="email" id={"emailId"} errorMessage={"Please Enter Your EmailId related to your account"} onChange={handleChange} />
                    <p className="t-danger mt">{errorMsg}</p>
                    <p className="t-success mt">{successMsg}</p>
                    <Button appearance="primary" type="submit" className="mt" loading={loading}>Submit</Button>
                </form>
            </div>
        </section>
    )
}

export default ResetPassword