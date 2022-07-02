import React, { useEffect, useState } from "react";
import { range } from "../../Utils/util";

const Columns = () => {
  const creatRowData = (start, end) => {
    const abc = [...Array.from(range(start, end))].map((x) => ({
      count: x,
      value: undefined,
    }));
    return abc;
  };

  let [columnObj, setColumnobj] = useState([
    {
      headerCount: 0,
      rowData: creatRowData(0, 9),
      value: null,
    },
    {
      headerCount: 1,
      rowData: creatRowData(10, 19),
      value: null,
    },
    {
      headerCount: 2,
      rowData: creatRowData(20, 29),
      value: null,
    },
    {
      headerCount: 3,
      rowData: creatRowData(30, 39),
      value: null,
    },
    {
      headerCount: 4,
      rowData: creatRowData(40, 49),
      value: null,
    },
    {
      headerCount: 5,
      rowData: creatRowData(50, 59),
      value: null,
    },
    {
      headerCount: 6,
      rowData: creatRowData(60, 69),
      value: null,
    },
    {
      headerCount: 7,
      rowData: creatRowData(70, 79),
      value: null,
    },
    {
      headerCount: 8,
      rowData: creatRowData(80, 89),
      value: null,
    },
    {
      headerCount: 9,
      rowData: creatRowData(90, 99),
      value: null,
    },
  ]);

  const handleChange = (event, headerCount, isXaxis) => {
    columnObj.map((x, index) =>
      x.rowData.map((y, ind) => {
        let a = y.count.toString();
        if (!isXaxis && a.length === 1) {
          a = `0${a}`;
        }
        if (
          (isXaxis && a[a.length - 1] == headerCount) ||
          (!isXaxis &&
            ((a.length === 1 && a[1] == headerCount) ||
              (a.length === 2 && a[0] == headerCount)))
        ) {
          columnObj[index].rowData[ind].value = event.target.value;
        }
      })
    );

    setColumnobj([...columnObj]);
  };

  const onSingleRowDataChange = (event, rowIndex, index) => {
    columnObj[index].rowData[rowIndex].value = event.target.value;
    setColumnobj([...columnObj]);
  };

  return (
    <div className="col-sm-8 border">
      <div className="row">
        <table className="table table-borderless fw-bold">
          <thead>
            <tr className="bg-warning">
              <th scope="col">
                <h5 className="text-center"></h5>
              </th>
              {columnObj.map((x) => (
                <th scope="col">
                  X{x.headerCount}
                  <input
                    onChange={(e) => {
                      handleChange(e, x.headerCount, true);
                    }}
                    className="col-sm-8"
                    type="text"
                    maxLength="3"
                  />{" "}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {columnObj.map((data, index) => (
              <tr className={data.headerCount % 2 ? "bg-warning" : "bg-white"}>
                <th scope="row">
                  Y{data.headerCount}{" "}
                  <input
                    onChange={(e) => {
                      handleChange(e, data.headerCount, false);
                    }}
                    className="col-sm-8"
                    type="text"
                    maxLength="3"
                  />{" "}
                </th>
                {data.rowData.map((x, rowInd) => (
                  <td>
                    {data.headerCount === 0 ? `0${x.count}` : x.count}
                    <input
                      value={x.value}
                      onChange={(e) => onSingleRowDataChange(e, rowInd, index)}
                      className="col-sm-8"
                      type="text"
                      maxLength="3"
                    />{" "}
                  </td>
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
