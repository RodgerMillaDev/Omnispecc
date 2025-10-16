import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import chatBot from "../media/chatbot.png"
import "../style/chatgram.css"
import "../style/chatgramresp.css"


function Chatgram(){
    return (
        <>
            <div className="chatgramSearch">
                <div className="chatGramSearchWrap">
                    <div className="chatSearchInputWrap">
                      <input type="text" placeholder="Search chat"/>
                    </div>
                    <div className="chatsearchInputicon">
                        <FontAwesomeIcon className="faIcon" icon={faSearch} />
                    </div>
                </div>

            </div>
            <div className="chatGramList">
                <div className="emptyChat">
                    <img width={"100px"} src={chatBot} alt="" />
                    <span>Welcome to chatgram</span>
                    <p>Oopps! You've no recent chats yet. Hire an expert to start chat </p>
                    <button>Start Chat</button>
                </div>

            </div>
            

        </>
    )
}

export default Chatgram;