import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'

const RedirectPopUP = ({ id, link }) => {
    const navigate = useNavigate()
    const [timer, setTimer] = useState(5)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(pre => pre - 1)
        }, 1000)
        const timeOut = setTimeout(() => {
            navigate(`${link}`)
        }, 5000)
        return () => {
            clearInterval(interval)
            clearTimeout(timeOut)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="logInAlert max-w mx-auto mt mb shadow-3d-light padding-md radius-1 tac">
            <h1 className="t-danger"> logIn Alert </h1>
            <p className="t-primary mt">You&apos;re LoggedIn As {id}</p>
            <p className="mt mb"> You can&apos;t login at this time.</p>
            <p>Redirecting you in <span className="t-primary t-bold">{timer}</span> seconds</p>
        </div>
    )
}

export default RedirectPopUP
RedirectPopUP.propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}