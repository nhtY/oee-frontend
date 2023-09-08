

function UpperContent() {

    
    return (
        <div className="row h-100 px-0 text-center justify-content-between align-items-center align-items-sm-stretch">

            {/* <!-- GG-OEE --> */}
            <div className="col-5 mb-2 bg-bellona shadow-lg rounded-4">
                <div className="row h-100">
                    <div className="col align-self-center">
                        <h1 className="">% 78,2</h1>
                        <h1 className="">GG-OEE</h1>
                    </div>
                </div>
            </div>

            {/* <!-- G-OEE-1S --> */}
            <div className="col-5 mb-2 bg-bellona shadow-lg rounded-4">
                <div className="row h-100">
                    <div className="col align-self-center">
                        <h1 className="">% 81,2</h1>
                        <h1 className="">G-OEE-1S</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpperContent;