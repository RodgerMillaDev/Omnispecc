
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import userImg from '../media/user.png'
import userImg2 from '../media/authImg.jpg'
import { faBarsStaggered,faSearch,faStar,faPenNib } from "@fortawesome/free-solid-svg-icons"
import "../style/userprofile.css"
import "../style/userprofresp.css"

function UserProfile(){
    return (
        <div className="userProfWrap">
                <div className="pageTitle">
                    <span>My Profile</span>
                </div>
                <div className="profImgWrap">
                    <div className="profImgAct">
                        <div className="userProfChangeImg">
                        <FontAwesomeIcon className="faIcon" icon={faPenNib} />

                    </div>
                        <img src={userImg2} alt="" />
                    </div>
                    <div className="profImgName">
                        <p>Rodger Milla</p>
                        <span>rodgerworks17@gmail.com</span>

                    </div>
                    
                </div>
                <div className="profUserDet">
                        <div className="profDiv">
                            <p className="profQ">Account Status</p>
                            <p className="profA profGreen">Active</p>
                          
                        </div>
                        <div className="profDiv">
    <p className="profQ">Name</p>
                            <p className="profA">Rodger Milla</p>                          
                        </div>
                             <div className="profDiv">
    <p className="profQ">Phone</p>
                            <p className="profA">0712345678</p>
                        </div>
                        <div className="profDiv">
    <p className="profQ">Email</p>
                            <p className="profA">rodgermilladev@gmail.com</p>                          
                        </div>
                   
                        <div className="profDiv profDivSingle">
                            <p className="profQ">User Agreement</p>

                        </div>
                        <div className="profDiv profDivSingle">
                            <p className="profQ profRed">Terminate Your Account?</p>

                        </div>
                </div>
                <div className="profBtn">
                    <button>Save Changes</button>
                </div>
        </div>
    )
}

export default UserProfile;