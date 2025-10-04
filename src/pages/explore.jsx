 import "../style/explore.css"
 import { motion } from "motion/react";
 import "../style/exploreresp.css"


function Explore(){
    return (
        <div className="Explore">

            <h3>Where To Explore?</h3>


            <div className="exploreWrap">
                <div className="pill1">
                    <p>Omnimall</p>
                    <p>OmniCab</p>
                </div>
                <div className="pill2">
                    <p>Lorem</p>
                    <p>BigBite</p>
                    <p>Delivery Agent</p>
                </div>
                <div className="pill3">
                    <p>Hello</p>
                    <p>Hello</p>
                </div>
             
                <div className="pill4">
                    <p>Services</p>
                </div>



                
            </div>
            <motion.button

            whileHover={{scale:1.1}}
            whileTap={{scale:.8}}
            
            

            >Proceed</motion.button>
            

        </div>
    )
}

export default Explore;