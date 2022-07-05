import { useEffect, useRef, useState } from "react";
import Buttons from "../../Subcomponents/Buttons";
import Columns from "../../Subcomponents/Columns";
import DrawStatus from "../../Subcomponents/DrawStatus";
import Filter from "../../Subcomponents/Filter";
import TenToThirtyNineCheckbox from "../../Subcomponents/TenToThirtyNineCheckbox";
import TotalResult from "../../Subcomponents/TotalResult";
import { range } from "../../Utils/util";
import "./index.css";

const Lottary = () => {
  const creatRowData = (start, end) => {
    const abc = [...Array.from(range(start, end))].map((x) => ({
      count: x,
      value: undefined,
    }));
    return abc;
  };

  let [columnXYObj, setXYColumnobj] = useState([
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
  const [columnObj, setColumnobj] = useState([
    {
      firstColumn: {
        count: 10,
        value: false,
      },
      secondColumn: {
        count: 30,
        value: false,
      },
    },
    {
      firstColumn: {
        count: 11,
        value: false,
      },
      secondColumn: {
        count: 31,
        value: false,
      },
    },
    {
      firstColumn: {
        count: 12,
        value: false,
      },
      secondColumn: {
        count: 32,
        value: false,
      },
    },
    {
      firstColumn: {
        count: 13,
        value: false,
      },
      secondColumn: {
        count: 33,
        value: false,
      },
    },
    {
      firstColumn: {
        count: 14,
        value: false,
      },
      secondColumn: {
        count: 34,
        value: false,
      },
    },
    {
      firstColumn: {
        count: 15,
        value: false,
      },
      secondColumn: {
        count: 35,
        value: false,
      },
    },
    {
      firstColumn: {
        count: 16,
        value: false,
      },
      secondColumn: {
        count: 36,
        value: false,
      },
    },
    {
      firstColumn: {
        count: 17,
        value: false,
      },
      secondColumn: {
        count: 37,
        value: false,
      },
    },
    {
      firstColumn: {
        count: 18,
        value: false,
      },
      secondColumn: {
        count: 38,
        value: false,
      },
    },
    {
      firstColumn: {
        count: 19,
        value: false,
      },
      secondColumn: {
        count: 39,
        value: false,
      },
    },
  ]);

  const [tenToNineTeen, setTenToNineTeen] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [thirtyToThirtyNine, setThirtyToThirtyNine] = useState(false);
  const [checkBoxCheckedUnchecked, setCheckBoxCheckedUnchecked] = useState({
    event: false,
    isTenToNinteen: false,
  });

  const checkBoxForTenToNinteen = (value) => {
    setTenToNineTeen(value);
    columnObj.forEach((x, index) => {
      columnObj[index].firstColumn.value = value;
    });
    setColumnobj([...columnObj]);
  };

  const checkBoxForThirtyToThirtyNine = (value) => {
    setThirtyToThirtyNine(value);
    columnObj.forEach((x, index) => {
      columnObj[index].secondColumn.value = value;
    });
    setColumnobj([...columnObj]);
  };

  const handleFilterCheckBox = (event, isTenToNinteen) => {
    isTenToNinteen ? setTenToNineTeen(event) : setThirtyToThirtyNine(event);
    setCheckBoxCheckedUnchecked({
      event: event,
      isTenToNinteen: isTenToNinteen,
    });
  };

  return (
    <div className="container-fluid">
      <DrawStatus />
      <Filter
        checkBoxForTenToNinteen={checkBoxForTenToNinteen}
        checkBoxForThirtyToThirtyNine={checkBoxForThirtyToThirtyNine}
        setTenToNineTeen={setTenToNineTeen}
        setThirtyToThirtyNine={setThirtyToThirtyNine}
        checkBoxCheckedUnchecked={checkBoxCheckedUnchecked}
        columnObj={columnObj}
      />
      <div className="row">
        <div className="col-sm-1 bordered">
          <TenToThirtyNineCheckbox
            handleFilterCheckBox={handleFilterCheckBox}
            columnObj={columnObj}
            setColumnobj={setColumnobj}
          />
        </div>
        <Columns columnObj={columnXYObj} setColumnobj={setXYColumnobj} />
        <TotalResult />
      </div>

      <Buttons />
    </div>
  );
};

export default Lottary;
