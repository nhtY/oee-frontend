import { useEffect, useState } from "react";
import FlipCardBack from "./FlipCardBack";
import FlipCardFront from "./FlipCardFront";
import UpperContent from "./UpperContent";
import { BACK_FACE_TIME, FRONT_FACE_TIME } from "../constants/flipFaceTime";
import {useAppSelector, useAppDispatch} from '../app/hooks';
import { OEE_DATA_FETCH_INTERVAL } from "../constants/fetchIntervals";
import {fetchCurrentOee} from '../features/oee-table/oeeTableSlice';
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { fetchGraphData } from "../features/oee-graph/oeeGraphSlice";

function Main() {

    const fetchCurrentStatus = useAppSelector(state => state.table.fetching);
    const fetchCurrentError = useAppSelector(state => state.table.error);
    const fetchCurrentTriggered = useAppSelector(state => state.table.fetchTriggered);
    const currentOeeData = useAppSelector(state => state.table.currentOeeData);
    const graphContent = useAppSelector(state => state.graph.content);

    const [timer, setTimer] = useState(0);
    const [isFetch, setIsFetch] = useState(true);

    const dispatch = useAppDispatch();

    const [currentFace, setFace] = useState("front");

    useEffect(() => {
        console.log("TIMER: ", timer);
        if(timer <= 0 && fetchCurrentStatus === 'idle' ) {
            dispatch(fetchCurrentOee());
            setTimer(OEE_DATA_FETCH_INTERVAL);
        }

    },[timer]);

    useEffect(()=> {
        //setIsFetch(timer <= 0);
        if(fetchCurrentError === null &&  currentOeeData) {
            flipStarter(currentFace, setFace, timer, setTimer);
        }

        

    }, [currentFace, fetchCurrentError, currentOeeData, timer])


    return (
        <main>
            {fetchCurrentStatus === 'fetching'? <Spinner /> : fetchCurrentError? <ErrorMessage error={fetchCurrentError} /> : currentOeeData?
            
            (
                <div className="h-100 container-fluid">

                    {/* <!-- Upper Content --> */}
                    <div id="upper" className="row py-3 justify-content-center">
                        <div className="col-10">
                            <UpperContent data={currentOeeData} />
                        </div>
                    </div>
                    
                    {/* <!-- Lower Content --> */}
                    <div id="lower" className="row pb-3 justify-content-center flip-card">
                        <div id="rotating" className="col-10 flip-card-inner">
                            {/* <!-- flip-card-front --> */}
                            <FlipCardFront data={currentOeeData} />

                            {/* <!-- flip-card-back --> */}
                            <FlipCardBack isFetch={isFetch} />

                        </div>
                    </div>
                </div>
            ) : null
            
            }


        </main>
    );
}

export default Main;



function flipStarter(currentFace, setFace, timer, setTimer) {
    // console.log("Flip Starter invoked...");

    const inner_card = document.getElementById("rotating");
    const back_face = document.getElementById("back-face");

    const timeOut = currentFace === 'front' ? FRONT_FACE_TIME : BACK_FACE_TIME;

    setTimeout(()=> {
        // console.log("Flipping...");

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

        // console.log("Timer: ", timer);

        setTimer(timer => timer - timeOut);

    }, timeOut);

}
