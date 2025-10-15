
import logo from "../media/fullLogo2.png"
import '../media/icofont/icofont.css'
import '../media/icofont/icofont.min.css'
import userImg from "../media/authImg.jpg"

import "../style/sidemenu.css"
import useStore from "../store/zustandstore"





function Sidemenu(){
    const closeSidebar = useStore((s)=> s.closeSidebar)


    const toProfessions = ()=>{
        closeSidebar()


    }

    const toChatgram = ()=>{
        closeSidebar()


    }






    return(
        <div className="menuWrap">

            <div className="menuPlacer">
                <div className="menuTop">
                    <div className="menuLogo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="menuMid">
                    <div className="menuLink menuLinkActive" onClick={toProfessions}>
                        <div className="menuLinkBack"></div>
                        <div className="menuIcon">
					<i className="icofont-cubes"></i>


                        </div>
                        <p>All Professions</p>
                    </div>
                    <div className="menuLink" onClick={toChatgram}>
                                                <div className="menuLinkBack"></div>

                        <div className="menuIcon">
					<i class="icofont-chat"></i>
                        </div>
                        <p>Chatgram</p>
                    </div>
                    <div className="menuLink">
                                                <div className="menuLinkBack"></div>

                        <div className="menuIcon">
					<i class="icofont-history"></i>
                        </div>
                        <p>History</p>
                    </div>
                    <div className="menuLink">
                                                <div className="menuLinkBack"></div>

                        <div className="menuIcon">
					<i class="icofont-user-alt-2"></i>
                        </div>
                        <p>My Profile</p>
                    </div>
                    <div className="menuLink">
                                                <div className="menuLinkBack"></div>

                        <div className="menuIcon">
					<i class="icofont-logout"></i>
                        </div>
                        <p>Log Out</p>
                    </div>
                </div>
                <div className="menuBtm">
                    <div className="menuBtmWrap">
                        <div className="menuImg">
                            <img width={"10px"} src={userImg} alt="" />
                        </div>
                        <div className="userMenu">
                            <p>Rodger Milla</p>
                            <span>Activate account</span>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Sidemenu;