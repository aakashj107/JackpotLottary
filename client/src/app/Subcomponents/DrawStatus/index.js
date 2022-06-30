import React from "react";

const DrawStatus = () => {
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
                    <div className="row text-center"> <h4> 02:30:00 PM </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> NEXT DRAW </h6></div>
                    <div className="row text-center"><h4> 02:45:00 PM </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> TIME </h6></div>
                    <div className="row text-center"> <h4> 02:41:17 PM </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> TIME LEFT </h6></div>
                    <div className="row text-center"><h4> 00:02:11 </h4> </div>
                </div>
            </div>
            </>
    );
}

export default DrawStatus;