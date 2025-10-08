import Sidemenu from "../components/sidemenu";
import '../style/profdash.css'
import '../style/profdashresp.css'
import '../media/icofont/icofont.css'
import '../media/icofont/icofont.min.css'
import userImg from "../media/user.png"
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"

function ProfessionDashboard(){
    const sidemMenuWrapper = useRef(null)
    const showfonNav = () =>{
        sidemMenuWrapper.current.style.left="0%"

    }
    const cnclFonNav = () =>{
                sidemMenuWrapper.current.style.left="-101%"

    }
    return(
        <div id="profDashWraper">

            <div className="sidemMenuWrapper" ref={sidemMenuWrapper}>
            <Sidemenu/>

            </div>
            <div className="profActDashWrap">




                   <div className="profActDash">
                    <div className="profActDashtop">
                        <div className="profActDashtopLeft" onClick={showfonNav}>
                            <FontAwesomeIcon className="faIcon" icon={faBarsStaggered} />

                        </div>
                        <div className="profActDashtopRight">
    <div className="dashNotify">
  <i className="icofont-bell-alt"></i>
</div>

                            <div className="dashminiProf">
  <i className="icofont-user-alt-2"></i>
                            </div>
                        </div>
                  
                        

                        

                    </div>
                    <div className="profActDashBtm">

                    </div>
                </div>

                <div className="messagesContainer">

                </div>
            </div>        
        </div>
    )
}

export default ProfessionDashboard;


