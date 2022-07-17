import React, { useEffect, useState } from "react";
import "./index.scss";

const Columns = ({
  columnObj,
  setColumnobj,
  getTotalAndPoint,
  allFilterSelected,
  evenFilterSelected,
  oddFilterSelected,
  familyPick,
}) => {
  const familyPickData = {
    a: [0, 5, 50, 55],
    b: [1, 6, 10, 15, 51, 56, 60, 65],
    c: [2, 7, 20, 25, 52, 57, 70, 75],
    d: [3, 8, 30, 35, 53, 58, 80, 85],
    e: [4, 9, 40, 45, 54, 59, 90, 95],
  };

  const handleChange = (
    event,
    headerCount,
    isXaxis,
    xIndex,
    headerXYCountValue
  ) => {
    columnObj.map((x, index) => {
      x.rowData.map((y, ind) => {
        let a = y.count.toString();
        if (!isXaxis && a.length === 1) {
          a = `0${a}`;
        }

        if (!allFilterSelected && evenFilterSelected) {
          if (
            (parseInt(a[0]) % 2 === 0 &&
              isXaxis &&
              a[a.length - 1] == headerCount) ||
            (parseInt(a) % 2 === 0 &&
              !isXaxis &&
              ((a.length === 1 && a[1] == headerCount) ||
                (a.length === 2 && a[0] == headerCount)))
          ) {
            columnObj[index].rowData[ind].value = event.target.value;
          }
        } else if (!allFilterSelected && oddFilterSelected) {
          if (
            (parseInt(a[0]) % 2 !== 0 &&
              isXaxis &&
              a[a.length - 1] == headerCount) ||
            (parseInt(a) % 2 !== 0 &&
              !isXaxis &&
              ((a.length === 1 && a[1] == headerCount) ||
                (a.length === 2 && a[0] == headerCount)))
          ) {
            columnObj[index].rowData[ind].value = event.target.value;
          }
        } else {
          if (
            (isXaxis && a[a.length - 1] == headerCount) ||
            (!isXaxis &&
              ((a.length === 1 && a[1] == headerCount) ||
                (a.length === 2 && a[0] == headerCount)))
          ) {
            columnObj[index].rowData[ind].value = event.target.value;
          }
        }
      });
      columnObj[xIndex][headerXYCountValue] = event.target.value;
    });

    setColumnobj([...columnObj]);
    // need to change.
    getTotalAndPoint();
  };

  const onSingleRowDataChange = (event, rowIndex, index) => {
    if (familyPick) {
      for (let data in familyPickData) {
        if (
          familyPickData[data].includes(
            columnObj[index].rowData[rowIndex].count
          )
        ) {
          familyPickData[data].map((x, indexOfx) => {
            columnObj.map((y, indexOfCol) => {
              y.rowData.map((z, indexOfRowData) => {
                if (z.count === x) {
                  columnObj[indexOfCol].rowData[indexOfRowData].value =
                    event.target.value;
                }
              });
            });
          });
        }
      }
    }
    columnObj[index].rowData[rowIndex].value = event.target.value;
    setColumnobj([...columnObj]);
    // need to change.
    getTotalAndPoint();
  };

  return (
    <div className="col-sm-8 border">
      <div className="row">
        <table className="table table-borderless fw-bold tblColumns">
          <thead>
            <tr className="row-color">
              <th scope="col">
                <h5 className="text-center"></h5>
              </th>
              <th scope="col">
                <h5 className="text-center"></h5>
              </th>
              {columnObj.map((x, index) => (
                <>
                  <th>X{x.headerCount}</th>
                  <th scope="col">
                    <input
                      value={x.headerXCountValue}
                      onChange={(e) => {
                        handleChange(
                          e,
                          x.headerCount,
                          true,
                          index,
                          "headerXCountValue"
                        );
                      }}
                      className="form-control input-center"
                      type="text"
                      maxLength="3"
                    />
                  </th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {columnObj.map((data, index) => (
              <tr className={data.headerCount % 2 ? "row-color" : "bg-white"}>
                <th>Y{data.headerCount} </th>
                <th scope="row">
                  <input
                    value={data.headerYCountValue}
                    onChange={(e) => {
                      handleChange(
                        e,
                        data.headerCount,
                        false,
                        index,
                        "headerYCountValue"
                      );
                    }}
                    className=" form-control input-center"
                    type="text"
                    maxLength="3"
                  />
                </th>
                {data.rowData.map((x, rowInd) => (
                  <>
                    <td>{data.headerCount === 0 ? `0${x.count}` : x.count} </td>
                    <td>
                      <input
                        value={x.value}
                        onChange={(e) =>
                          onSingleRowDataChange(e, rowInd, index)
                        }
                        className="form-control input-center"
                        type="text"
                        maxLength="3"
                      />
                    </td>
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Columns;
