import OeeGraph from "./OeeGraph";


function FlipCardBack() {

    return (
        <div id="back-face" className="row h-100 p-3 bg-bellona align-items-center shadow rounded-4 flip-card-back">
            <div id="graph" className="col h-100 bg-body">
                <OeeGraph /> 
            </div>
        </div>
    );
}

export default FlipCardBack;