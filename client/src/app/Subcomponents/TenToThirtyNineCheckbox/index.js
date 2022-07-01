import React, { useState } from "react";
import { range } from "../../Utils/util";

const TenToThirtyNineCheckbox = () => {

    const[columnObj, setColumnobj] = useState([
        {firstColumn: 10, secondColumn: 30},
        {firstColumn: 11, secondColumn: 31},
        {firstColumn: 12, secondColumn: 32},
        {firstColumn: 13, secondColumn: 33},
        {firstColumn: 14, secondColumn: 34},
        {firstColumn: 15, secondColumn: 35},
        {firstColumn: 16, secondColumn: 36},
        {firstColumn: 17, secondColumn: 37},
        {firstColumn: 18, secondColumn: 38},
        {firstColumn: 19, secondColumn: 39},
    ])

    return (
        <>
        <div className="row ">
                        <table className="table table-bordered">
                            <tr className="bg-danger">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            10 to 39
                                        </label>
                                    </div>
                                </th>
                            </tr>
                        </table>
                    </div>
        <div className="row">
        <table className="table table-bordered">
            <tbody>
              {columnObj.map(x =>   
                <tr className="bg-white">
                    <th>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                {x.firstColumn}
                            </label>
                        </div>
                    </th>
                    <th>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                {x.secondColumn}
                            </label>
                        </div>
                    </th>
                </tr>
                )}  
            </tbody>
        </table>
    </div>
    </>
    );
}

export default TenToThirtyNineCheckbox;