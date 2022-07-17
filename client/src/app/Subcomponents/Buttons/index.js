import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Buttons = ({ columnXYObj, columnObj, setColumnobj, setXYColumnobj, onClickBuy }) => {
  
  const {user,currentGame} = useSelector((state) => state.auth);
  const selectedLotteryNumber = [];
    const selectedCheckBoxes = [];
  const buySelectedLottery = () => {
    
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
  };

  const clearAllData = () => {
    columnObj.forEach((x, index) => {
      columnObj[index].firstColumn.value = false;
      columnObj[index].secondColumn.value = false;
    });

   columnXYObj.map((x, index) => {
      x.rowData.map((y, ind) => {
        columnXYObj[index].rowData[ind].value = '';
      });
      columnXYObj[index].headerXCountValue = '';
      columnXYObj[index].headerYCountValue = '';
      columnXYObj[index].point = 0;
      columnXYObj[index].total = 0;
    });

  setXYColumnobj([...columnXYObj]);
  setColumnobj([...columnObj]);
  };

  const lotteryData = {
    gameID: user.gameid,
    lottery_amt: selectedLotteryNumber,
    lottery: selectedCheckBoxes
  }

  onClickBuy(lotteryData);
  console.log(lotteryData);

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
          <button className="btn purchase-now" type="button">
            Transacations Details (F2)
          </button>
          {/* <button className="btn purchase-now" type="button">
            My Account (F3)
          </button> */}
          <button className="btn purchase-now" type="button">
            Results (F4){" "}
          </button>
          <button onClick={clearAllData} className="btn purchase-now" type="button">
            {" "}
            Clear All (F9)
          </button>
          <button
            className="btn purchase-now"
            onClick={buySelectedLottery}
            type="button">
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
