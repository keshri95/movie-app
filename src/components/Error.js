import { NavLink } from "react-router-dom";
import errorImg from "../components/assets/error.jpg";
const Error = () => {

    return <>
        <div className="container my-3">
            <NavLink to="/" className="btn btn-warning">Go Back</NavLink>
            <div className="row text-center">
               
                <div className="col">
                    <img src={errorImg} alt="" />
                </div>

            </div>

        </div>
    </>

}

export default Error;