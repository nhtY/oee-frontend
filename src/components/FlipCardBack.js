import OeeGraph from "./OeeGraph";
import {useAppDispatch, useAppSelector} from '../app/hooks';
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { useEffect } from "react";
import { fetchGraphData } from "../features/oee-graph/oeeGraphSlice";


function FlipCardBack({isFetch}) {

    console.log("BACK: ", isFetch);

    const content = useAppSelector(state => state.graph.content);
    const error = useAppSelector(state => state.graph.graphFetchError);
    const fetching = useAppSelector(state => state.graph.graphDataFetching);

    const dispatch = useAppDispatch();

    useEffect(() => {   
        console.log("USE EFFECT HERE... " + isFetch + ", " + fetching)
        if(isFetch===true && fetching === 'idle') {
            console.log("HERE fetch graph data");
            dispatch(fetchGraphData);
        }
    },[]);
    
    return (
        <div id="back-face" className="row h-100 p-3 bg-bellona align-items-center shadow rounded-4 flip-card-back">
            <div id="graph" className="col h-100 bg-body">
                {fetching=== 'fetching'? <Spinner /> : error? <ErrorMessage error={error} /> : content? <OeeGraph /> : null}
            </div>
        </div>
    );
}

export default FlipCardBack;