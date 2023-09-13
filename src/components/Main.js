import { useEffect, useRef, useState } from "react";
import FlipCardBack from "./FlipCardBack";
import FlipCardFront from "./FlipCardFront";
import UpperContent from "./UpperContent";
import { BACK_FACE_TIME, FRONT_FACE_TIME } from "../constants/flipFaceTime";
import {useAppSelector, useAppDispatch} from '../app/hooks';
import { OEE_DATA_FETCH_INTERVAL } from "../constants/fetchIntervals";
import {fetchCurrentOee} from '../features/oee-table/oeeTableSlice';
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

function Main() {

    const fetchCurrentStatus = useAppSelector(state => state.table.fetching);
    const fetchCurrentError = useAppSelector(state => state.table.error);
    const currentOeeData = useAppSelector(state => state.table.currentOeeData);

    const [timer, setTimer] = useState(0);
    const [isFetch, setIsFetch] = useState(true);

    const dispatch = useAppDispatch();

    const [currentFace, setFace] = useState("front");

    const timeOutRef = useRef(null);

    useEffect(() => {
        console.log("TIMER: ", timer);
        
        if(timer <= 0 && fetchCurrentStatus === 'idle' ) {
            dispatch(fetchCurrentOee());
        }else if (timer > 0 && currentFace==='back') {
            setIsFetch(true);
        }

    },[timer]);

    useEffect(() =>{
        if(currentOeeData) {
            setTimer(OEE_DATA_FETCH_INTERVAL);
        }
    }, [currentOeeData]);

    useEffect(()=> {
        
        if (currentOeeData && fetchCurrentError === null) {
            flipFaces();
        }
        return () => clearTimeout(timeOutRef.current);
    }, [currentFace, fetchCurrentError, currentOeeData])


    console.log("CURRENT DATA: ", currentOeeData);
    return (
        <main>
            {fetchCurrentStatus === 'fetching'? <Spinner /> : fetchCurrentError? <ErrorMessage error={fetchCurrentError} /> :
            
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
                            <FlipCardBack isFetch={isFetch} setIsFetch={setIsFetch} />

                        </div>
                    </div>
                </div>
            )
            
            }


        </main>
    );


    function flipFaces() {
        // console.log("Flip Starter invoked...");
    
        const inner_card = document.getElementById("rotating");
        const back_face = document.getElementById("back-face");
    
        const timeOut = currentFace === 'front' ? FRONT_FACE_TIME : BACK_FACE_TIME;
    
        timeOutRef.current = setTimeout(() => {

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

            setTimer(timer => timer - timeOut);

        }, timeOut);
        // console.log("Timer: ", timer);
    
    
    }


}

export default Main;




