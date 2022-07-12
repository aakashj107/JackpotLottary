import React, { useEffect, useState } from "react";
import './index.scss'

const Columns = ({columnObj, setColumnobj, getTotalAndPoint, allFilterSelected, evenFilterSelected, oddFilterSelected}) => {

  const handleChange = (event, headerCount, isXaxis) => {
    columnObj.map((x, index) =>
      x.rowData.map((y, ind) => {
        let a = y.count.toString();
          if (!isXaxis && a.length === 1) {
            a = `0${a}`;
          }
        if(!oddFilterSelected && !evenFilterSelected){
          if ((isXaxis && a[a.length - 1] == headerCount) ||
          (!isXaxis && ((a.length === 1 && a[1] == headerCount) || (a.length === 2 && a[0] == headerCount)))) 
          {
            columnObj[index].rowData[ind].value = event.target.value;
          }
        }
        if(evenFilterSelected){
              if(parseInt(a[0]) % 2 === 0 && (isXaxis && a[a.length - 1] == headerCount)){
                columnObj[index].rowData[ind].value = event.target.value;
              }
        }
        if(oddFilterSelected){
          if(parseInt(a[0]) % 2 !== 0 && (isXaxis && a[a.length - 1] == headerCount)){
            columnObj[index].rowData[ind].value = event.target.value;
          }
        }
       
      })
    );

    setColumnobj([...columnObj]);
    // need to change.
    getTotalAndPoint();
  };

  const onSingleRowDataChange = (event, rowIndex, index) => {
    columnObj[index].rowData[rowIndex].value = event.target.value;
    setColumnobj([...columnObj]);
    // need to change.
    getTotalAndPoint();
  };

  return (
    <div className="col-sm-8 border">
      <div className="row">
        <table className="table table-borderless fw-bold tblColumns" >
          <thead>
            <tr className="row-color">
              <th scope="col">
                <h5 className="text-center"></h5>
              </th>
              <th scope="col">
                <h5 className="text-center"></h5>
              </th>
              {columnObj.map((x) => (
                <>
                <th>X{x.headerCount}</th>
                <th scope="col">
                  <input onChange={(e) => { handleChange(e, x.headerCount, true);}}
                    className="form-control input-center" type="text" maxLength="3" />
                </th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {columnObj.map((data, index) => (
              <tr className={data.headerCount % 2 ? "row-color" : "bg-white"}>
                <th>Y{data.headerCount}{" "}</th>
                <th scope="row">
                  <input onChange={(e) => { handleChange(e, data.headerCount, false);}}
                    className=" form-control input-center" type="text" maxLength="3" />
                </th>
                {data.rowData.map((x, rowInd) => (
                <>
                
                  <td>{data.headerCount === 0 ? `0${x.count}` : x.count}{" "}</td>
                  <td>
                     
                    <input value={x.value}
                      onChange={(e) => onSingleRowDataChange(e, rowInd, index)}
                      className="form-control input-center" type="text" maxLength="3" />
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
