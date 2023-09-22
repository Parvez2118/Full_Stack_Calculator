import { Link } from "react-router-dom";

function Front(){
    return(
        <div className="MainDiv">
        <div className="Maindiv">
            <div className="Maindiv1">
            <img src="https://png.pngtree.com/png-vector/20220119/ourmid/pngtree-calculator-logo-financial-management-icon-png-image_4243696.png" className="image"></img>
            </div>
            <div className="Maindiv2">
                <h2>Login/SignUp To Use Calculator</h2>
                <div className="inner_button">
                <Link to='/login' ><button className="inner_button-1">Login</button></Link>
            <Link to='/signup' ><button className="inner_button-1">Sign Up</button></Link>

                </div>
            
            </div>
        

        </div>
        </div>
    )
}

export default Front;