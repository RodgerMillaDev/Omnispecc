import Sidemenu from "../components/sidemenu";
import '../style/profdash.css'
import '../style/profdashresp.css'
import '../media/icofont/icofont.css'
import plumber from "../media/plumber.jpg"
import '../media/icofont/icofont.min.css'
import userImg from "../media/user.png"
import man from "../media/authImg.jpg"
import man2 from "../media/authImg2.jpg"
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered,faSearch,faStar } from "@fortawesome/free-solid-svg-icons"
import useStore from "../store/zustandstore";

function ProfessionDashboard(){
    const searchWrapIcon = useRef(null)
    const categoryWrap = useRef(null)
    const searchInputWrap= useRef(null)

    const sidemMenuWrapper = useRef(null)
    const open = useStore((s)=> s.sideBarOpen )
    const openSidebar = useStore((s) => s.openSidebar)
    const closeSidebar = useStore((s)=> s.closeSidebar)

    const showfonNav = () =>{
        openSidebar()

    }
    const cnclFonNav = () =>{
        closeSidebar()

    }
    const openSearch = () =>{
        categoryWrap.current.style.width="calc(100% - 260px)"
                searchInputWrap.current.style.width="210px"


    }
    const closeSearch = () =>{
                        searchInputWrap.current.style.width="0px"

                categoryWrap.current.style.width="calc(100% - 50px)"
    }
    return(
        <div id="profDashWraper">

            <div  ref={sidemMenuWrapper} className={`sidemMenuWrapper ${open ? "showSidebar" : "hideSidebar"}`}>
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

                        <div className="profActDashBtmSearch">
                            <div className="profActDashBtmSearchWrap">
                                <div className="profActDashBtmSearchCont" >
                                      <div className="profSearchIcon" ref={searchWrapIcon} onClick={openSearch}>
                                        <FontAwesomeIcon icon={faSearch} className="faIcon" />

                                      </div>
                                      <div className="profSearchCont" ref={searchInputWrap}>
                                        <input type="text"  placeholder="Search profession"/>

                                      </div>
                                </div>
                                <div className="profActDashBtmCategories" ref={categoryWrap} onClick={closeSearch}>
                                    <div className="categoWrap">
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-atom"></i>

                                            </div>
                                            <p>All </p>
                                        </div>
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-wrench"></i>

                                            </div>
                                            <p>Home Repair </p>
                                        </div>
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-screw-driver"></i>

                                            </div>
                                            <p>Appliance Repair </p>
                                        </div>
                                       
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-help-robot"></i>

                                            </div>
                                            <p>Utility Services </p>
                                        </div>
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-mop"></i>

                                            </div>
                                            <p>Cleaning & Sanitization </p>
                                        </div>
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-paint-brush"></i>

                                            </div>
                                            <p>Renovation </p>
                                        </div>
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-cubes"></i>

                                            </div>
                                            <p>Interior & Organization </p>
                                        </div>
                                      
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-baby"></i>

                                            </div>
                                            <p>Child & Elderly Care </p>
                                        </div>
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-paw"></i>

                                            </div>
                                            <p>Animal Services </p>
                                        </div>
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-car"></i>

                                            </div>
                                            <p>Vehicle Services </p>
                                        </div>
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-book"></i>

                                            </div>
                                            <p>Home School </p>
                                        </div>
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-shield"></i>

                                            </div>
                                            <p>Security Services </p>
                                        </div>
                                        <div className="catBox">
                                            <div className="catIcon">
				                               	<i class="icofont-chair"></i>

                                            </div>
                                            <p>Other </p>
                                        </div>
                                        
                                    </div>
                              

                                </div>

                            </div>
                           
                        </div>
                         <div className="profRender">
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                    <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwalo</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man} alt="" />
                                           <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man2} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwalo</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man2} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man} alt="" />
                                           <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man2} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwalo</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man2} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man} alt="" />
                                           <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man2} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwalo</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man2} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man} alt="" />
                                           <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man2} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwalo</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man2} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwalo</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={man2} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                            <div className="profCardR">
                                <div className="profCardRTop">
                                    <img src={plumber} alt="" />
                                            <div className="profCardRate">
                                        <FontAwesomeIcon className="faIcon" icon={faStar} />
                                        <span>4.3</span>
                                    </div>

                                </div>
                                <div className="profCardRBtm">
                                    <p>Jacky Mwikali</p>
                                    <span>Plumber</span>
                                    <div className="profCardRBtmBtn">
                                        <button>Hire Me</button>
                                    </div>

                                </div>
                            </div>
                          
                            </div>
                          

                    </div>
                </div>

                <div className="messagesContainer">

                </div>
            </div>        
        </div>
    )
}

export default ProfessionDashboard;


