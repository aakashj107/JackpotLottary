import React from "react";
import './index.scss'

const TotalResult = ({ columnXYObj }) => {
  return (
    <div className="col-sm-3 border">
      <div className="row">
        <div className="col-sm-6 border">
          <div className="row">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">
                    <h6 className="text-center fw-bold text-white">Total</h6>
                  </th>
                  <th scope="col">
                    <h6 className="text-center fw-bold text-white">Point</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                {columnXYObj.map((x) => (
                  <tr>
                    <th scope="col" style={{paddingBottom:"10px"}}>
                      <h6 className="text-center fw-bold text-white">{x.total}</h6>
                    </th>
                    <th scope="col" style={{paddingBottom:"10px"}}>
                      <h6 className="text-center fw-bold text-white">{x.point}</h6>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-sm-6 bg-danger border">
          <div className="row">
            
            <table className="table bg-danger table-bordered" id="tblResult">
            <thead>
                <tr>
                  <th scope="col" colSpan={4}>
                    <h5 className="text-center fw-bold " style={{marginBottom:"0rem",fontSize:"22px"}}>RESULT</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <h6 className="text-center fw-bold text-center fw-bold padding-10"> 10</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold text-center fw-bold">00</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">30</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h6 className="text-center fw-bold">11</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">31</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h6 className="text-center fw-bold">12</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">32</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h6 className="text-center fw-bold">13</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">33</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h6 className="text-center fw-bold">14</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">34</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h6 className="text-center fw-bold">15</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">35</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h6 className="text-center fw-bold">16</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">36</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h6 className="text-center fw-bold">17</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">37</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h6 className="text-center fw-bold">18</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">38</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h6 className="text-center fw-bold">19</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">39</h6>
                  </th>
                  <th>
                    <h6 className="text-center fw-bold">00</h6>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalResult;
