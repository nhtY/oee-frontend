import timeIcon from '../assets/time-forward_icon.svg';

function Nav() {

    return (
        <nav>
            <div className="container-fluid h-100 text-white p-0">
                <div className="row h-100 w-100 align-items-center">
                    <div className="col col-md-2"></div>
                    <div className="col-auto col-md-8 text-center">
                        <div className="nav-text">Kanepe Döşeme Bandı Performans</div>
                    </div>
                    <div className="col col-md-2 nav-text p-0 text-center">
                        <span>10:35 </span>
                        <img className="img-responsive" src={timeIcon} alt="time icon" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;