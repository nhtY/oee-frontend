import FlipCardBack from "./FlipCardBack";
import FlipCardFront from "./FlipCardFront";
import UpperContent from "./UpperContent";


function Main() {

    return (
        <main>
        <div class="h-100 container-fluid">

            {/* <!-- Upper Content --> */}
            <div id="upper" class="row py-3 justify-content-center">
                <div class="col-10">
                    <UpperContent />
                </div>
            </div>

            {/* <!-- Lower Content --> */}
            <div id="lower" class="row pb-3 justify-content-center flip-card">
                <div class="col-10 flip-card-inner">
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