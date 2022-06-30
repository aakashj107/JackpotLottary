import React from "react";

const Filter = () => {

    return (
        <div className="row border">
        <div className="col-sm-1 bg-danger py-2 border">
            <div className="form-check form-check-inline ">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label fw-bold text-white" for="inlineCheckbox1">10 to 19</label>
            </div>
        </div>
        <div className="col-sm-1 bg-danger py-2 border">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label fw-bold text-white" for="inlineCheckbox2"> 30 to 39</label>
            </div>
        </div>
        <div className="col-sm-3 bg-danger py-2 border">
            <div className="form-check form-check-inline ">
                <input className="col-sm-3" type="text" maxLength="3" />
                    <button type="button" className="btn btn-secondary btn-sm ms-1 "><div className="fw-bold"> L P </div></button>
                
            </div>

            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label fw-bold text-white" for="inlineCheckbox2">FP</label>
            </div>
        </div>
        <div className="col-sm-2 bg-danger py-2 border">
            <div className="form-check form-check-inline ">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label fw-bold text-white" for="inlineCheckbox1">All </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label fw-bold text-white" for="inlineCheckbox2"> Odd </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label fw-bold text-white" for="inlineCheckbox2"> Even </label>
            </div>
        </div>
        <div className="d-grid col-sm-2 mx-auto">
            <button className="btn btn-danger fw-bold" type="button">Advance</button>
        </div>

    </div>
    );
}

export default Filter;