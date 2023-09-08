import timeIcon from '../assets/time-forward_icon.svg';

function Nav() {

    return (
        <nav>
            <div class="container-fluid h-100 text-white p-0">
                <div class="row h-100 w-100 align-items-center">
                    <div class="col col-md-2"></div>
                    <div class="col-auto col-md-8 text-center">
                        <div class="nav-text">Kanepe Döşeme Bandı Performans</div>
                    </div>
                    <div class="col col-md-2 nav-text p-0 text-center">
                        <span>10:35 </span>
                        <img class="img-responsive" src={timeIcon} alt="time icon" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;