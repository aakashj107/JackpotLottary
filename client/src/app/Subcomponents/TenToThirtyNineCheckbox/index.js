import React, { useEffect, useState } from "react";

const TenToThirtyNineCheckbox = ({
  handleFilterCheckBox,
  columnObj,
  setColumnobj,
}) => {
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

  return (
    <>
      <div className="row ">
        <table className="table table-bordered">
          <tr className="bg-danger">
            <th>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
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
            {columnObj.map((x, index) => (
              <tr className="bg-white">
                <th>
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
                    <label className="form-check-label" for="flexCheckDefault">
                      {x.firstColumn.count}
                    </label>
                  </div>
                </th>
                <th>
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
                    <label className="form-check-label" for="flexCheckDefault">
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
