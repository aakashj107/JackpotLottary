import Axios from "axios";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentGame } from "../../state/authSlice";

const DrawStatus = () => {

    const dispatch = useDispatch();
    const {user,currentGame} = useSelector((state) => state.auth);
    const [timeLeft, setTimeLeft] = useState("0")

    // Random component
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <span>
                    {pad2(hours)}:{pad2(minutes)}:{pad2(seconds)}
                </span>
            );
        }
    };


    const pad2 = (number) => {
        return (number < 10 ? '0' : '') + number
    }

    const get_time_diff = (start, end) => {
        
        var a = start.split(":");
        var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
        var b = end.split(":");
        var seconds2 = (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]);

        var date1 = new Date();
        //date1.setHours(0,0,0,0)
        //date1.setSeconds(seconds)

        var date2 = new Date();
        date2.setHours(0,0,0,0)
        date2.setSeconds(seconds2)
    
        console.log( date1 + " " + date2);
    
        if (date1 < date2) {
            var milisec_diff = date2 - date1;
        }else{
            var milisec_diff = date1 - date2;
        }
    
        var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
    
        var date_diff = new Date( milisec_diff );
    
        //return toHHMMSS(milisec_diff/1000)
        return milisec_diff
    }

    const getcurrentGame = async (e) => {
        try {
            

            const res = await Axios.get("/api/game/getcurrentGame");

            if (res.status === 200) {
                const {current_game} = res.data.payload;
                dispatch(setCurrentGame({ current_game }));
                let time =  get_time_diff(current_game.next_game,current_game.endtime)
                
                setTimeLeft(time.toString());

            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data) {
                // window.alert(error.response.data.message);
            }
        }
    }

    useEffect(() => {
        //getcurrentGame();
    },[])

    

    return (
        <>
            <div className="row inner-hero-section">
                <div className="col-sm-3 border"><h5>Terminal ID - {user.login_id}</h5></div>
                <div className="col-sm-3 border"><h5>Balance Points - {user.balance} </h5></div>
                <div className="col-sm-4 border"></div>
                <div className="col-sm-2 border">
                    <div>
                        <button type="button" className="btn btn-info btn-sm"> Password </button>
                        <button type="button" className="btn btn-info btn-sm"> Logout </button>
                    </div>
                </div>
            </div>
            <div className="row  border subscribe-area">
                <div className="col-sm-3 border">
                    <div className="row text-center fw-bold"><h6> LAST DRAW </h6></div>
                    <div className="row text-center"> <h4> {currentGame?.previous_game} </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row text-center fw-bold"><h6> NEXT DRAW </h6></div>
                    <div className="row text-center"><h4> {currentGame?.next_game} </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row text-center fw-bold"><h6> CURRENT TIME </h6></div>
                    <div className="row text-center"> <h4> {currentGame?.starttime} </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row text-center fw-bold"><h6> TIME LEFT </h6></div>
                    <div className="row text-center">
                        <h4>
                            <Countdown date={Date.now() + parseInt(timeLeft)}
                                precision={2}
                                renderer={renderer}  />
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DrawStatus;
