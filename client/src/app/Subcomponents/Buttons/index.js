import React from "react";

const Buttons = ({ columnXYObj, columnObj }) => {
  const buySelectedLottery = () => {
    const selectedLotteryNumber = [];
    const selectedCheckBoxes = [];
    columnXYObj.map((x, index) => {
      x.rowData.map((y, ind) => {
        if (y.value != undefined) {
          selectedLotteryNumber.push({ count: y.count, value: y.value });
        }
      });
    });

    columnObj.map((x) => {
      if (x.firstColumn.value) {
        selectedCheckBoxes.push(x.firstColumn.count);
      }
      if (x.secondColumn.value) {
        selectedCheckBoxes.push(x.secondColumn.count);
      }
    });
    const lotteryData = {
        lottery_amt:selectedLotteryNumber,
        lottery: selectedCheckBoxes
    }

    console.log(lotteryData);
  };

  return (
    <div className="row py-2">
      <div className="col-sm-2 ">
        <div className="form-floating bg-primary">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Ticker Number"
          />
        </div>
      </div>
      <div className="col-sm-1">
        <button className="btn btn-info" type="button">
          Claim (F1)
        </button>
      </div>
      <div className="col-sm-7 ">
        <div className="d-grid gap-2 d-md-block">
          <button className="btn btn-success" type="button">
            Transacations Details (F2)
          </button>
          <button className="btn btn-secondary" type="button">
            My Account (F3)
          </button>
          <button className="btn btn-danger" type="button">
            Results (F4){" "}
          </button>
          <button className="btn btn-info" type="button">
            {" "}
            Clear All (F9)
          </button>
          <button
            className="btn btn-primary"
            onClick={buySelectedLottery}
            type="button"
          >
            {" "}
            Buy (F5)
          </button>
        </div>
      </div>
      <div className="col-sm-2 ">
        <div className="row">
          <div className="col-sm-6">
            <span>
              {" "}
              <h4 className="ms-2 mt-2"> TOTAL </h4>
            </span>
          </div>
          <div className="col-sm-6">
            <span>
              {" "}
              <h4 className="mt-2 bg-warning bg-opacity-10 border fw-bold text-center">
                {" "}
                340{" "}
              </h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
