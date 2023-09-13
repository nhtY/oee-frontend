

function UpperContent({data}) {

    console.log("DATA: ", data);
    console.log("UPPER: ", data&& data.goee1s);
    
    return (
        <div className="row h-100 px-0 text-center justify-content-between align-items-center align-items-sm-stretch">

            {/* <!-- GG-OEE --> */}
            <div className="col-5 bg-bellona shadow-lg rounded-4">
                <div className="row h-100">
                    <div className="col align-self-center">
                        <h1 className="">% {data && data.ggOee}</h1>
                        <h1 className="">GG-OEE</h1>
                    </div>
                </div>
            </div>

            {/* <!-- G-OEE-1S --> */}
            <div className="col-5 bg-bellona shadow-lg rounded-4">
                <div className="row h-100">
                    <div className="col align-self-center">
                        <h1 className="">% {data && data.goee1s}</h1>
                        <h1 className="">G-OEE-1S</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpperContent;