import { useEffect, useState } from "react";
import FlipCardBack from "./FlipCardBack";
import FlipCardFront from "./FlipCardFront";
import UpperContent from "./UpperContent";
import { BACK_FACE_TIME, FRONT_FACE_TIME } from "../constants/flipFaceTime";


function Main() {

    const [currentFace, setFace] = useState("front");

    useEffect(()=> {
        flipStarter(currentFace, setFace);
    }, [currentFace])

    return (
        <main>
            <div className="h-100 container-fluid">

                {/* <!-- Upper Content --> */}
                <div id="upper" className="row py-3 justify-content-center">
                    <div className="col-10">
                        <UpperContent />
                    </div>
                </div>

                {/* <!-- Lower Content --> */}
                <div id="lower" className="row pb-3 justify-content-center flip-card">
                    <div id="rotating" className="col-10 flip-card-inner">
                        {/* <!-- flip-card-front --> */}
                        <FlipCardFront />

                        {/* <!-- flip-card-back --> */}
                        <FlipCardBack />

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;



function flipStarter(currentFace, setFace) {
    console.log("Flip Starter invoked...");

    const inner_card = document.getElementById("rotating");
    const back_face = document.getElementById("back-face");

    const timeOut = currentFace === 'front' ? FRONT_FACE_TIME : BACK_FACE_TIME;

    setTimeout(()=> {
        console.log("Flipping...");

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        const rotationAxis = (screenWidth <= 576 || screenHeight < 420) ?
            'Y' : 'X';

        back_face.style.transform = `rotate${rotationAxis}(180deg)`; // it is always flipped with regards to the rotation axis.

        if(currentFace === 'front') {
            inner_card.style.transform = `rotate${rotationAxis}(180deg)`;
            setFace('back')
        }else {
            inner_card.style.transform = `rotate${rotationAxis}(0deg)`;
            setFace('front')
        }

    }, timeOut);

}
