import React from "react";
import Countdown from "react-countdown";

const DrawStatus = () => {

    const lastDraw = "02:00:00 PM"
    const nexttDraw = "02:40:00 PM"
    const currentDraw = "02:20:00 PM"
    const timeLeft = "1200000"

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


    return (
        <>
            <div className="row bg-danger bg-opacity-10 text-secondary">
                <div className="col-sm-3 border"><h5>Terminal ID - RET001</h5></div>
                <div className="col-sm-3 border"><h5>Balance Points - 17678 </h5></div>
                <div className="col-sm-4 border"></div>
                <div className="col-sm-2 border">
                    <div className="float-end">
                        <button type="button" className="btn btn-secondary btn-sm"> Password </button>
                        <button type="button" className="btn btn-secondary btn-sm"> Logout </button>
                    </div>
                </div>
            </div>
            <div className="row text-dark border">
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> LAST DRAW </h6></div>
                    <div className="row text-center"> <h4> {lastDraw} </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> NEXT DRAW </h6></div>
                    <div className="row text-center"><h4> {nexttDraw} </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> TIME </h6></div>
                    <div className="row text-center"> <h4> {currentDraw} </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> TIME LEFT </h6></div>
                    <div className="row text-center">
                        <h4>
                            <Countdown date={Date.now() + parseInt(timeLeft)}
                                precision={2}
                                renderer={renderer} />
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DrawStatus;