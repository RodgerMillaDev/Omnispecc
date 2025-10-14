import Sidemenu from "../components/sidemenu";
import '../style/profdash.css'
import '../style/profdashresp.css'
import '../media/icofont/icofont.css'
import '../media/icofont/icofont.min.css'
import userImg from "../media/user.png"
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered,faSearch } from "@fortawesome/free-solid-svg-icons"

function ProfessionDashboard(){
    const searchWrapIcon = useRef(null)
    const categoryWrap = useRef(null)
    const searchInputWrap= useRef(null)

    const sidemMenuWrapper = useRef(null)
    const showfonNav = () =>{
        sidemMenuWrapper.current.style.left="0%"

    }
    const cnclFonNav = () =>{
                sidemMenuWrapper.current.style.left="-101%"

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


