import { useEffect,useRef } from "react";
import authImg from "../media/authImg2.jpg"
import logoDark from '../media/logoDark.png'
import google from "../media/google.png"
import { Ping } from "ldrs/react";
import 'ldrs/react/Ping.css'
import { motion, scale } from "motion/react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification,signInWithEmailAndPassword } from "firebase/auth";
import 'ldrs'
import { useNavigate } from "react-router-dom";
import '../media/icofont/icofont.min.css'
import "../style/auth.css"
import "../style/authresp.css"
import Swal from "sweetalert2";
import { doc,setDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig";



function Auth(){

  const authLog = useRef(null)
  const authSign = useRef(null)
  const signBtn = useRef(null)
  const signLoader = useRef(null)
  const logLoader = useRef(null)
  const navigate = useNavigate()
  const logBtn = useRef(null)
  const signPass = useRef(null)
  const signCpass = useRef(null)
  const signEm = useRef(null)
  const signPosition = useRef(null)
  const logEm =useRef(null)
  const logPass = useRef(null)

  const logPos = useRef(null)




  const signUp = () =>{
    const em = signEm.current.value
    const pos = signPosition.current.value
    const pass = signPass.current.value
    const cpass = signCpass.current.value

    if(em && pos && pass && cpass ){
        if(pass === cpass){
        signBtn.current.style.display="none"
        signLoader.current.style.display="flex"


        createUserWithEmailAndPassword(auth, em,pass).then((userCred)=>{
            var user = userCred.user;
            sendEmailVerification(user).then(async ()=>{
                const userData = {
                    name:"",
                    em:"em",
                    uid:user.uid,
                    fonReg:"",
                    sexReg:"",
                    photoUrl:"",
                    profUpdate:false,
                    accountBalance:0
                    
                }
                    await setDoc(doc(db, pos , user.uid), userData).then(()=>{
                        Swal.fire("","Verification email sent.Please check your inbox.").then(()=>{
                                                          signBtn.current.style.display="block"
                                signLoader.current.style.display="none"
                            toLog()
                        })
                      })
                    })
                  }).catch((err)=>{
                                signBtn.current.style.display="block"
                                signLoader.current.style.display="none"
                    
                                if(err.code === "auth/email-already-in-use"){
                                        Swal.fire("","Email already in use. Try logging in.","warning")
                                }
                    
                            })
        

        }else{
         Swal.fire("", "Your passwords dont match","warning")
        }


    }else{
        Swal.fire("", "Oops! Looks like you missed a field","warning")
       
    }


  }

  const logIn = () =>{
    logBtn.current.style.display="none"

    logLoader.current.style.display="flex"  

    const em = logEm.current.value;
    const pos = logPos.current.value;
    const pass = logPass.current.value


    if(logEm && logPos && logPass){

        signInWithEmailAndPassword(auth,em,pass)
        .then((userCred)=>{
            var user = userCred.user;
            if(user.emailVerified){
                if(pos==="User"){
                navigate("/explore")

                }else if(pos ==="Member"){
                    navigate("member")

                }
            }else{
                auth.signOut();
                  Swal.fire({
                        title: "Email Not Verified",
                        text: "Please verify your email before signing in.",
                        icon: "warning",
                        confirmButtonText: "Resend Verification Email",
                    }).then((result) => {
                                     logBtn.current.style.display="block"
    logLoader.current.style.display="none"  
                        if (result.isConfirmed) {
                        // Resend verification email
                        sendEmailVerification(user).then(() => {
                                         logBtn.current.style.display="none"
    logLoader.current.style.display="flex"  
                            Swal.fire("","Verification email sent. Please check your inbox.");
                        });
                        }
                    });            }


        }).catch((error)=>{
                logBtn.current.style.display="block"
    logLoader.current.style.display="none"  
               var errCode = error.code; 
                console.log(error)
                if (errCode === "auth/invalid-email" || errCode === "auth/wrong-password" || errCode === "auth/internal-error" || errCode === "auth/invalid-credential") {
                    Swal.fire("Invalid email or password","error");
                }else{
                     
    Swal.fire("","An error occured try again later","warning")
                    console.log(error)
                }
        })

        

    }else{
       Swal.fire("", "Oops! Looks like you missed a field","warning")

    }
}


    const toLog = ()=>{
        authSign.current.style.top="100%"
        authLog.current.style.top="0%"

    }
    const toSign = ()=>{
          authLog.current.style.top="-100%"
        authSign.current.style.top="0%"
    }





    return(
        <div className="auth">
            <div className="authWrap">
                <div className="authLeft">
                    <img src={authImg} alt="" />
                    <div className="authCont">
                        <p>Lorem, ipsum dolor sit amet aod Lorem ipsum dolor sit amet. consectetur adipisicing elit. Repellat, quas.</p>
                    </div>
                </div>
                <div className="authRight" >
                    <div className="authLog" ref={authLog}>
                    <div className="authLogWrap">
                        <div className="authIntro">
                            <img src={logoDark} alt="" />
                            <h3>Everything in one place</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                        </div>
                        <div className="authData">
                           
                            <div className="authInputWrap">
                               
                                <div className="authActInput">
                                    <div className="authActInputWrap">
                                     <input ref={logEm}  type="email" placeholder="Email"/>

                                    </div>
                                    <div className="authActInputIcon">
                                            					<i className="icofont-envelope"></i>

                                    </div>
                                </div>
                            </div>
                            <div className="authInputWrap">
                            

                              <div className="authActInput">
                                    <div className="authActInputWrap">
                                        <select name="" id="" ref={logPos}>
                                            <option value="">Select Position</option>
                                            <option value="User">User</option>
                                            <option value="Member">Member</option>
                                        </select>
                                     {/* <input type="text" placeholder="Register as?"/> */}

                                    </div>
                                    <div className="authActInputIcon">
					<i className="icofont-user-alt-2"></i>

                                    </div>
                                    </div>
                                </div>
                            <div className="authInputWrap">
                      
                             <div className="authActInput">
                                    <div className="authActInputWrap">
                                     <input ref={logPass} type="password" placeholder="Password"/>

                                    </div>
                                    <div className="authActInputIcon">
					<i className="icofont-duotone icofont-lock"></i>

                                    </div>
                                </div>
                            </div>
                            <div className="authBtnWrap">
                                <div className="authLoader" ref={logLoader}>
                                    <Ping
                                    
                                    color="#156070"
                                    speed="2"
                                    size="45"

                                    />

                                </div>
                                <motion.div className="authBtn" onClick={logIn} ref={logBtn}>
                                     <button>Log In</button>
                                </motion.div>

                            </div>
                            <div className="authGoogle">
                                <div className="authGoogleOpt">
                                <p>Don't have an account?  <span onClick={toSign}> Sign Up </span> </p>
                                <span>Reset Password</span>
                                </div>

                              
                                <div className="authGoogleTop">
                                    <div className="kaline"></div>
                                    <p>or</p>
                                    <div className="kaline"></div>
                                </div>
                                <motion.div
                                
                                whileHover={{scale:1.1}}
                                whileTap={{scale:.8}}

                                className="authGoogleBtn">
                                    <img width={"10px"} src={google} alt="" />
                                </motion.div>
                            </div>


                            
                        </div>

                    </div>
                    </div>
                    <div className="authSign" ref={authSign}>
                    <div className="authSignWrap">
                        <div className="authIntro">
                            <img src={logoDark} alt="" />
                            <h3>Get Started</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                        </div>
                        <div className="authData">
                           
                            <div className="authInputWrap">
                               
                                <div className="authActInput">
                                    <div className="authActInputWrap">
                                     <input ref={signEm} type="email" placeholder="Email"/>

                                    </div>
                                    <div className="authActInputIcon">
                                            					<i className="icofont-envelope"></i>

                                    </div>
                                </div>
                            </div>
                            <div className="authInputWrap">
                      
                             <div className="authActInput">
                                    <div className="authActInputWrap" >
                                        <select name="" id=""  ref={signPosition}>
                                            <option value="">Select Position</option>
                                            <option value="User">User</option>
                                            <option value="Member">Member</option>
                                        </select>
                                     {/* <input type="text" placeholder="Register as?"/> */}

                                    </div>
                                    <div className="authActInputIcon">
					<i className="icofont-user-alt-2"></i>

                                    </div>
                                </div>
                            </div>
                            <div className="authInputWrap">
                      
                             <div className="authActInput">
                                    <div className="authActInputWrap">
                                     <input ref={signPass} type="password" placeholder="Password"/>

                                    </div>
                                    <div className="authActInputIcon">
					<i className="icofont-duotone icofont-lock"></i>

                                    </div>
                                </div>
                            </div>
                            <div className="authInputWrap">
                      
                             <div className="authActInput">
                                    <div className="authActInputWrap">
                                     <input ref={signCpass} type="password" placeholder="Confirm Password"/>
      
                                    </div>
                                    <div className="authActInputIcon">
					<i className="icofont-duotone icofont-lock"></i>

                                    </div>
                                </div>
                            </div>
                            <div className="authBtnWrap">
                                <div className="authLoader" ref={signLoader}>
                                    <Ping
                                    
                                    color="#156070"
                                    speed="2"
                                    size="45"

                                    />

                                </div>
                                <div
                                
                                
                                className="authBtn" onClick={signUp} ref={signBtn}>

                                     <button>Get Started</button>
                                </div>

                            </div>
                            <div className="authGoogle">
                                <p>Already have an account  <span onClick={toLog}> Sign In </span> </p>
                                <div className="authGoogleTop">
                                    <div className="kaline"></div>
                                    <p>or</p>
                                    <div className="kaline"></div>
                                </div>
                                <motion.div 
                                
                             whileHover={{scale:1.1}}
                             whileTap={{scale:.8}}


                                className="authGoogleBtn">
                                    <img width={"10px"} src={google} alt="" />
                                </motion.div>
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