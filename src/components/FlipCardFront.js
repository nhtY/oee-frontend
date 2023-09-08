

function FlipCardFront() {

    return (
        <div class="row h-100 px-3 bg-bellona justify-content-between align-items-center shadow rounded-4 flip-card-front">
                        
            {/* <!-- TT-GP --> */}
            <div class="col-sm-5 py-2">
                <span class="type">TT-GP</span><span class="value">1,23</span>
            </div>

            <div class="col-12 d-block d-sm-none">
                <div class="divider"></div>
            </div>

            {/* <!-- TT-GG --> */}
            <div class="col-sm-5 py-2">
                <span class="type">TT-GG</span><span class="value">1,35</span>
            </div>

            <div class="col-12">
                <div class="divider"></div>
            </div>

            {/* <!-- TT-1S --> */}
            <div class="col-sm-5 py-2">
                <span class="type">TT-1S</span><span class="value">2,07</span>
            </div>

            <div class="col-12 d-block d-sm-none">
                <div class="divider"></div>
            </div>

            {/* <!-- Red/Tamir --> */}
            <div class="col-sm-5 py-2">
                <span class="type type-long">Red/Tamir</span><span class="value">12</span>
            </div>

            <div class="col-12">
                <div class="divider"></div>
            </div>
            
            {/* <!-- Farklı Ürün --> */}
            <div class="col-sm-5 py-2">
                <span class="type type-long">Farklı Ürün</span><span class="value">18</span>
            </div>

            <div class="col-12 d-block d-sm-none">
                <div class="divider"></div>
            </div>

            {/* <!-- Ürün Grubu --> */}
            <div class="col-sm-5 py-2">
                <span class="type type-long">Ürün Grubu</span><span class="value">11</span>
            </div>
        </div>
    );
}

export default FlipCardFront;