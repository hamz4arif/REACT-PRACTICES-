import { Link } from "react-router-dom"

const ThankYou = () => {
    return (
        <div className="mt-5">
            <div className="jumbotron text-center">
                <h1 className="display-3">Thank You!</h1>
                <p className="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
                <hr/>
                    <p>
                        Having trouble? <a href="">Contact us</a>
                    </p>
                    <p className="lead">
                        <Link className="btn btn-primary btn-sm" to="/" role="button">Continue to homepage</Link>
                    </p>
            </div>
        </div>
    )
}
export default ThankYou