import React, { useEffect, useState } from "react";

const TenToThirtyNineCheckbox = ({
  handleFilterCheckBox,
  columnObj,
  setColumnobj,
  setTenToThirtynineValue,
  tenToNineTeen,
  thirtyToThirtyNine,
}) => {
  const [tenToThirtynine, setTenToThirtynine] = useState(false);

  useEffect(() => {
    if (tenToNineTeen && thirtyToThirtyNine) {
      setTenToThirtynine(true);
    } else {
      setTenToThirtynine(false);
    }
  }, [thirtyToThirtyNine, tenToNineTeen]);

  const handleClick = (event, index, parameter, isTenToNinteen) => {
    let columnObj1 = [...columnObj];
    columnObj1[index][parameter] = {
      ...columnObj1[index][parameter],
      value: event.target.checked,
    };
    setColumnobj([...columnObj1]);
    let isAllChecked = true;
    columnObj1.map((x) => {
      if (x[parameter].value === false) {
        isAllChecked = false;
        return;
      }
    });
    handleFilterCheckBox(isAllChecked, isTenToNinteen);
  };

  const handleSetTenToThirtynine = (event) => {
    setTenToThirtynineValue({ target: { checked: event.target.checked } });
    setTenToThirtynine(event.target.checked);
  };

  return (
    <>
      <div className="row ">
        <table className="table table-bordered">
          <tbody>
            <tr className="bg-danger">
              <th style={{ paddingBottom: "10px" }}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={tenToThirtynine}
                    onClick={(event) => handleSetTenToThirtynine(event)}
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label fw-bold text-white"
                    for="flexCheckDefault"
                  >
                    10 to 39
                  </label>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <table className="table table-bordered">
          <tbody>
            {columnObj.map((x, index) => (
              <tr>
                <th style={{ paddingBottom: "11px" }}>
                  <div className="form-check">
                    <input
                      checked={x.firstColumn.value}
                      className="form-check-input"
                      type="checkbox"
                      value={x.firstColumn.value}
                      onClick={(ev) =>
                        handleClick(ev, index, "firstColumn", true)
                      }
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-white"
                      for="flexCheckDefault"
                    >
                      {x.firstColumn.count}
                    </label>
                  </div>
                </th>
                <th style={{ paddingBottom: "11px" }}>
                  <div className="form-check">
                    <input
                      checked={x.secondColumn.value}
                      value={x.secondColumn.value}
                      onClick={(ev) =>
                        handleClick(ev, index, "secondColumn", false)
                      }
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-white"
                      for="flexCheckDefault"
                    >
                      {x.secondColumn.count}
                    </label>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TenToThirtyNineCheckbox;
