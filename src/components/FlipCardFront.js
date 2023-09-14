
// TODO: Type isimlerini bu dosya içinde const bir array ya da object içinde tanımla... Manuel değer girmelerden kaçın.
const FIELD_NAMES = {
    ttGp: "TT-GP",
    ttGg: "TT-GG",
    tt1s: "TT-1S",
    redTamir: "Red/Tamir",
    farkliUrun: "Farklı Ürün",
    urunGrubu: "Ürün Grubu"
}

function FlipCardFront({data}) {

    return (
        <div className="row h-100 px-3 bg-bellona justify-content-between align-items-center shadow rounded-4 flip-card-front">
                        
            {/* <!-- TT-GP --> */}
            <div className="col-sm-5 py-2">
                <span className="type">{FIELD_NAMES.ttGp}</span><span className="value">{data && data.ttGp}</span>
            </div>

            <div className="col-12 d-block d-sm-none">
                <div className="divider"></div>
            </div>

            {/* <!-- TT-GG --> */}
            <div className="col-sm-5 py-2">
                <span className="type">{FIELD_NAMES.ttGg}</span><span className="value">{data && data.ttGg}</span>
            </div>

            <div className="col-12">
                <div className="divider"></div>
            </div>

            {/* <!-- TT-1S --> */}
            <div className="col-sm-5 py-2">
                <span className="type">{FIELD_NAMES.tt1s}</span><span className="value">{data && data.tt1s}</span>
            </div>

            <div className="col-12 d-block d-sm-none">
                <div className="divider"></div>
            </div>

            {/* <!-- Red/Tamir --> */}
            <div className="col-sm-5 py-2">
                <span className="type type-long">{FIELD_NAMES.redTamir}</span><span className="value">{data && data.redTamir}</span>
            </div>

            <div className="col-12">
                <div className="divider"></div>
            </div>
            
            {/* <!-- Farklı Ürün --> */}
            <div className="col-sm-5 py-2">
                <span className="type type-long">{FIELD_NAMES.farkliUrun}</span>
                <span className="value">{data && data.farkliUrun}</span>
            </div>

            <div className="col-12 d-block d-sm-none">
                <div className="divider"></div>
            </div>

            {/* <!-- Ürün Grubu --> */}
            <div className="col-sm-5 py-2">
                <span className="type type-long">{FIELD_NAMES.urunGrubu}</span><span className="value">{data && data.urunGrubu}</span>
            </div>
        </div>
    );
}

export default FlipCardFront;