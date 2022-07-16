import React, { useEffect, useState } from "react";

const Filter = (props) => {
  const [tenToNineTeen, setTenToNineTeen] = useState(false);
  const [thirtyToThirtyNine, setThirtyToThirtyNine] = useState(false);
  const [luckyPick, setLuckyPick] = useState("");

  useEffect(() => {
    props.checkBoxCheckedUnchecked.isTenToNinteen
      ? setTenToNineTeen(props.checkBoxCheckedUnchecked.event)
      : setThirtyToThirtyNine(props.checkBoxCheckedUnchecked.event);
  }, [props.checkBoxCheckedUnchecked]);

  const handleClickTenToNineTeen = (event) => {
    setTenToNineTeen(() => props.checkBoxForTenToNinteen(event.target.checked));
  };

  const handleClickThirtyToThirtyNine = (event) => {
    setThirtyToThirtyNine(event.target.checked);
    props.setThirtyToThirtyNine(() =>
      props.checkBoxForThirtyToThirtyNine(event.target.checked)
    );
  };

  useEffect(() => {
    if (props.evenFilterSelected && props.oddFilterSelected) {
      props.setAllFilterSelected(true);
    } else {
      props.setAllFilterSelected(false);
    }
  }, [props.evenFilterSelected, props.oddFilterSelected]);

  const setluckyPickValue = () => {
    let columnXYObj = props.columnXYObj;
    columnXYObj[5].rowData[0].value = luckyPick;
    props.setXYColumnobj([...columnXYObj]);
  };

  return (
    <div className="row border">
      <div className="col-sm-1 bg-danger py-2 border">
        <div className="form-check form-check-inline ">
          <input
            checked={tenToNineTeen}
            onClick={handleClickTenToNineTeen}
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label
            className="form-check-label fw-bold text-white"
            for="inlineCheckbox1"
          >
            10 to 19
          </label>
        </div>
      </div>
      <div className="col-sm-1 bg-danger py-2 border">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            checked={thirtyToThirtyNine}
            onClick={handleClickThirtyToThirtyNine}
            id="inlineCheckbox2"
            value="option2"
          />
          <label
            className="form-check-label fw-bold text-white"
            for="inlineCheckbox2"
          >
            {" "}
            30 to 39
          </label>
        </div>
      </div>
      <div className="col-sm-3 bg-danger py-2 border">
        <div className="form-check form-check-inline ">
          <input
            value={luckyPick}
            onChange={(ev) =>setLuckyPick(ev.target.value)}
            className="col-sm-3"
            type="text"
            maxLength="3"
          />
          <button
            onClick={setluckyPickValue}
            type="button"
            className="btn btn-secondary btn-sm ms-1 "
          >
            <div className="fw-bold"> L P </div>
          </button>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label
            className="form-check-label fw-bold text-white"
            for="inlineCheckbox2"
          >
            FP
          </label>
        </div>
      </div>
      <div className="col-sm-2 bg-danger py-2 border">
        <div className="form-check form-check-inline ">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            checked={props.allFilterSelected}
            onClick={(ev) => props.selectAllFilter(ev.target.checked)}
          />
          <label
            className="form-check-label fw-bold text-white"
            for="inlineCheckbox1"
          >
            All{" "}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            checked={props.oddFilterSelected}
            onClick={(ev) => props.setOddFilterSelected(ev.target.checked)}
          />
          <label
            className="form-check-label fw-bold text-white"
            for="inlineCheckbox2"
          >
            {" "}
            Odd{" "}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            checked={props.evenFilterSelected}
            onClick={(ev) => props.setEvenFilterSelected(ev.target.checked)}
          />
          <label
            className="form-check-label fw-bold text-white"
            for="inlineCheckbox2"
          >
            {" "}
            Even{" "}
          </label>
        </div>
      </div>
      <div className="d-grid col-sm-2 mx-auto">
        <button className="btn btn-danger fw-bold" type="button">
          Advance
        </button>
      </div>
    </div>
  );
};

export default Filter;
