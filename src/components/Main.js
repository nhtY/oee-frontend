

function Main() {

    return (
        <main>
        <div class="h-100 container-fluid">

            {/* <!-- Upper Content --> */}
            <div id="upper" class="row py-3 justify-content-center">
                <div class="col-10">
                    <div class="row h-100 px-0 text-center justify-content-between align-items-center align-items-sm-stretch">

                        {/* <!-- GG-OEE --> */}
                        <div class="col-5 mb-2 bg-bellona shadow-lg rounded-4">
                            <div class="row h-100">
                                <div class="col align-self-center">
                                    <h1 class="">% 78,2</h1>
                                    <h1 class="">GG-OEE</h1>
                                </div>
                            </div>
                        </div>

                        {/* <!-- G-OEE-1S --> */}
                        <div class="col-5 mb-2 bg-bellona shadow-lg rounded-4">
                            <div class="row h-100">
                                <div class="col align-self-center">
                                    <h1 class="">% 81,2</h1>
                                    <h1 class="">G-OEE-1S</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>

            {/* <!-- Lower Content --> */}
            <div id="lower" class="row pb-3 justify-content-center flip-card">
                <div class="col-10 flip-card-inner">
                    {/* <!-- flip-card-front --> */}
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

                    {/* <!-- flip-card-back --> */}
                    <div class="row h-100 p-3 bg-bellona align-items-center shadow rounded-4 flip-card-back">
                        <div id="graph" class="col h-100 bg-secondary">
                            The Line Graph Comes Here. Col silinebilir. Yerine id'si graph olan
                            bir div konabilir. 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
    );
}

export default Main;