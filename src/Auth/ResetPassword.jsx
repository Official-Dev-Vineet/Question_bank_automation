import { Button } from "rsuite"
import FormInput from "../Utils/FormInput";
import { useCallback, useState } from "react";
const ResetPassword = () => {
    const getLocation = async () => {
        await fetch(`https://ipapi.co/json/`).then(res => res.json()).then(location => setValues({ ...values, locationData: location }))
    }
    const [values, setValues] = useState({
        email: "",
        locationData: {}
    })
    const handleChange = useCallback((e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        console.log(values)
    }, [values])
    const handleSubmit = async (event) => {
        event.preventDefault();
        await getLocation();
    }
    return (
        <section className="reset-password mt mb shadow-3d-light padding-sm max-w mx-auto radius-1" style={{ "--mwValue": 120 }}>
            <h1 className="mb tac t-primary">
                Reset Password Form
            </h1>
            <div className="max-w mt mx-auto mb">
                <form method="POST" id="reset-password-form" onSubmit={handleSubmit}>
                    <FormInput name="email" label="Email" placeholder="Email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required type="email" id={"email"} errorMessage={"Please Enter Your EmailId related to your account"} onChange={handleChange} />
                    <Button appearance="primary" type="submit" className="mt">Submit</Button>
                </form>
            </div>
        </section>
    )
}

export default ResetPassword