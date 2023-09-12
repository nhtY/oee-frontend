

function FlipCardFront() {

    return (
        <div className="row h-100 px-3 bg-bellona justify-content-between align-items-center shadow rounded-4 flip-card-front">
                        
            {/* <!-- TT-GP --> */}
            <div className="col-sm-5 py-2">
                <span className="type">TT-GP</span><span className="value">1,23</span>
            </div>

            <div className="col-12 d-block d-sm-none">
                <div className="divider"></div>
            </div>

            {/* <!-- TT-GG --> */}
            <div className="col-sm-5 py-2">
                <span className="type">TT-GG</span><span className="value">1,35</span>
            </div>

            <div className="col-12">
                <div className="divider"></div>
            </div>

            {/* <!-- TT-1S --> */}
            <div className="col-sm-5 py-2">
                <span className="type">TT-1S</span><span className="value">2,07</span>
            </div>

            <div className="col-12 d-block d-sm-none">
                <div className="divider"></div>
            </div>

            {/* <!-- Red/Tamir --> */}
            <div className="col-sm-5 py-2">
                <span className="type type-long">Red/Tamir</span><span className="value">12</span>
            </div>

            <div className="col-12">
                <div className="divider"></div>
            </div>
            
            {/* <!-- Farklı Ürün --> */}
            <div className="col-sm-5 py-2">
                <span className="type type-long">Farklı Ürün</span>
                <span className="value">18</span>
            </div>

            <div className="col-12 d-block d-sm-none">
                <div className="divider"></div>
            </div>

            {/* <!-- Ürün Grubu --> */}
            <div className="col-sm-5 py-2">
                <span className="type type-long">Ürün Grubu</span><span className="value">11</span>
            </div>
        </div>
    );
}

export default FlipCardFront;