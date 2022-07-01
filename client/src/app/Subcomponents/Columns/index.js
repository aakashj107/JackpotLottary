import React, { useEffect, useState } from 'react';
import { range } from '../../Utils/util';

const Columns = () => {
    
    const [columnObj, setColumnobj] = useState([
    {
        headerCount:0, rowData: [...Array.from(range(0,9))] 
    },
    {
        headerCount:1, rowData: [...Array.from(range(10,19))]
    },
    {
        headerCount:2, rowData: [...Array.from(range(20,29))]
    },
    {
        headerCount:3, rowData: [...Array.from(range(30,39))]
    },
    {
        headerCount:4, rowData: [...Array.from(range(40,49))]
    },
    {
        headerCount:5, rowData: [...Array.from(range(50,59))]
    },
    {
        headerCount:6, rowData: [...Array.from(range(60,69))]
    },
    {
        headerCount:7, rowData: [...Array.from(range(70,79))]
    },
    {
        headerCount:8, rowData: [...Array.from(range(80,89))]
    },
    {
        headerCount:9, rowData: [...Array.from(range(90,99))]
    },])

   
      
    return (
<div className="col-sm-8 border">
                <div className="row">
                    <table className="table table-borderless fw-bold">
                        <thead>
                            <tr className="bg-warning">
                                <th scope="col"><h5 className="text-center"></h5></th>
                                { columnObj.map(x =>  <th scope="col">X{x.headerCount} <input className="col-sm-8" type="text" maxLength="3"/> </th> ) }
                            </tr>
                        </thead>
                        <tbody>
                           {columnObj.map((data) => 
                            <tr className={data.headerCount%2?'bg-warning':'bg-white'}>
                                <th scope="row">Y{data.headerCount} <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                   {data.rowData.map(x => <td>{data.headerCount === 0 ?`0${x}`:x} <input className="col-sm-8" type="text" maxLength="3"/> </td>)} 
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default Columns;