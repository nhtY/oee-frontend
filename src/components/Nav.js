import { useEffect, useState } from 'react';
import timeIcon from '../assets/time-forward_icon.svg';
import {useAppSelector} from '../app/hooks'

function Nav() {
    const fetchCurrentStatus = useAppSelector(state => state.table.fetching);
    const [lastFetchTime, setLastFetchTime] = useState({
        hour: '00',
        minute: '00'
    }); 

    const [currentTime, setCurrentTime] = useState(formatedTime(new Date()))

    useEffect(() => {

        if(fetchCurrentStatus === 'fetching') {
            setLastFetchTime(formatedTime(new Date()));
        }

    }, [fetchCurrentStatus]);

    useEffect(() => {

        const interval = setInterval(() => setCurrentTime(formatedTime(new Date())), 5000); // for every 30 seconds

        return () => clearInterval(interval);
    }, []);

    function formatedTime(date) {
        let hour = '';
        let minutes = '';

        if (date.getHours() < 10) {
            hour = '0' + date.getHours().toString()
        }else {
            hour += date.getHours().toString();
        }

        if(date.getMinutes() < 10) {
            minutes = '0' + date.getMinutes().toString()
        }else {
            minutes += date.getMinutes().toString();
        }

        return {
            hour: hour,
            minute: minutes
        }
    }

    return (
        <nav>
            <div className="container-fluid h-100 text-white p-0">
                <div className="row h-100 w-100 align-items-center">
                    <div className="col col-md-2 nav-text">
                        <span className='ps-1'>{currentTime.hour}<span className='blink'>:</span>{currentTime.minute}</span>
                    </div>
                    <div className="col-auto col-md-8 text-center">
                        <div className="nav-text">Kanepe Döşeme Bandı Performans</div>
                    </div>
                    <div className="col col-md-2 nav-text p-0 text-center">
                        <span>{lastFetchTime.hour}:{lastFetchTime.minute} </span>
                        <img className="img-responsive" src={timeIcon} alt="time icon" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;