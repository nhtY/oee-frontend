import { useEffect } from "react";
import FlipCardBack from "./FlipCardBack";
import FlipCardFront from "./FlipCardFront";
import UpperContent from "./UpperContent";


function Main() {

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