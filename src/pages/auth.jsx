import { useEffect } from "react";
import authImg from "../media/authImg2.jpg"
import logoDark from '../media/logoDark.png'
import "../style/auth.css"


function Auth(){
    return(
        <div className="auth">
            <div className="authWrap">
                <div className="authLeft">
                    <img src="" alt="" />
                </div>
                <div className="authRight">
                    <div className="authLog">
                        <div className="authIntro">
                            <img src={logoDark} alt="" />
                            <span>Everything in one place</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                        </div>
                        <div className="authData">
                           
                            <div className="authInputWrap">
                                <p>Email</p>
                                <div className="authActInput">
                                <input type="email" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="authInputWrap">
                                <p>Password</p>
                                <div className="authActInput">
                                <input type="password" placeholder="Enter password"/>
                                </div>
                            </div>
                            <div className="authBtnWrap">
                                <div className="authLoader">

                                </div>
                                <div className="authBtn">
                                     <button>Log In</button>
                                </div>

                            </div>
                            <div className="authGoogle">
                                <div className="authGoogleTop">
                                    <div className="kaline"></div>
                                    <p>or</p>
                                    <div className="kaline"></div>
                                </div>
                            </div>


                            
                        </div>

                    </div>


                </div>
            </div>

        </div>

    )

}

export default Auth;