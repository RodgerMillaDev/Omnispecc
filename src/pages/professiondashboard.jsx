import Sidemenu from "../components/sidemenu";
import "../style/profdash.css";
import "../style/profdashresp.css";
import "../media/icofont/icofont.css";
import plumber from "../media/plumber.jpg";
import "../media/icofont/icofont.min.css";
import userImg from "../media/user.png";
import man from "../media/authImg.jpg";
import man2 from "../media/authImg2.jpg";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import useStore from "../store/zustandstore";
import UserProfile from "../components/userprofile";
import Allprofessions from "../components/allprof";
import Chatgram from "../components/chatgram";

function ProfessionDashboard() {
  const searchWrapIcon = useRef(null);
  const categoryWrap = useRef(null);
  const searchInputWrap = useRef(null);

  const sidemMenuWrapper = useRef(null);
  const open = useStore((s) => s.sideBarOpen);
  const openSidebar = useStore((s) => s.openSidebar);
  const closeSidebar = useStore((s) => s.closeSidebar);
  const userprofiledash = useStore((s) => s.userprofiledash);
  const professionDash = useStore((s)=> s.professionDash);
  const chatgram = useStore((s)=>s.chatgram)

  const showfonNav = () => {
    openSidebar();
  };
  const cnclFonNav = () => {
    closeSidebar();
  };
  const openSearch = () => {
    categoryWrap.current.style.width = "calc(100% - 260px)";
    searchInputWrap.current.style.width = "210px";
  };
  const closeSearch = () => {
    searchInputWrap.current.style.width = "0px";

    categoryWrap.current.style.width = "calc(100% - 50px)";
  };
  return (
    <div id="profDashWraper">
      <div
        ref={sidemMenuWrapper}
        className={`sidemMenuWrapper ${open ? "showSidebar" : "hideSidebar"}`}
      >
        <Sidemenu />
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
          <div className="userDashboard">
            <div className={`profActDashBtm ${professionDash ? "profActDashBtmActive" : ""}`}>
              <Allprofessions />
            </div>
            <div
              className={`userProCont ${
                userprofiledash ? "userProContActive" : ""
              }`}
            >
            <UserProfile />
            </div>

            <div className={`messagesCont ${chatgram ? "messageContActive" : ""}`}>
                <Chatgram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionDashboard;
