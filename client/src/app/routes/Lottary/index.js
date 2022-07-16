import Axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import Buttons from "../../Subcomponents/Buttons";
import Columns from "../../Subcomponents/Columns";
import DrawStatus from "../../Subcomponents/DrawStatus";
import Filter from "../../Subcomponents/Filter";
import TenToThirtyNineCheckbox from "../../Subcomponents/TenToThirtyNineCheckbox";
import TotalResult from "../../Subcomponents/TotalResult";
import { range } from "../../Utils/util";
import "./index.css";
import bg_img from "../../assets/images/inner-bg01.jpg"


const Lottary = () => {
  const creatRowData = (start, end) => {
    const abc = [...Array.from(range(start, end))].map((x) => ({
      count: x,
      value: '',
    }));
    return abc;
  };

  const [columnXYObj, setXYColumnobj] = useState([
    {
      headerCount: 0,
      rowData: creatRowData(0, 9),
      total: 0,
      point: 0,
    },
    {
      headerCount: 1,
      rowData: creatRowData(10, 19),
      total: 0,
      point: 0,
    },
    {
      headerCount: 2,
      rowData: creatRowData(20, 29),
      total: 0,
      point: 0,
    },
    {
      headerCount: 3,
      rowData: creatRowData(30, 39),
      total: 0,
      point: 0,
    },
    {
      headerCount: 4,
      rowData: creatRowData(40, 49),
      total: 0,
      point: 0,
    },
    {
      headerCount: 5,
      rowData: creatRowData(50, 59),
      total: 0,
      point: 0,
    },
    {
      headerCount: 6,
      rowData: creatRowData(60, 69),
      total: 0,
      point: 0,
    },
    {
      headerCount: 7,
      rowData: creatRowData(70, 79),
      total: 0,
      point: 0,
    },
    {
      headerCount: 8,
      rowData: creatRowData(80, 89),
      total: 0,
      point: 0,
    },
    {
      headerCount: 9,
      rowData: creatRowData(90, 99),
      total: 0,
      point: 0,
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


  const [allFilterSelected, setAllFilterSelected] = useState(false);
  const [oddFilterSelected, setOddFilterSelected] = useState(false);
  const [evenFilterSelected, setEvenFilterSelected] = useState(false);

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

  const getTotalAndPoint = () => {
    const updatedColumnObj = [...columnXYObj];
    updatedColumnObj.forEach((x, index) => {
      let totalCounter = 0;
      columnXYObj[index].rowData.map((y, ind) => {
        if (y.value) {
          totalCounter = totalCounter + parseInt(y.value);
        }
      });
      columnXYObj[index].total = totalCounter;
      columnXYObj[index].point = totalCounter * 2;
    });

    setXYColumnobj([...updatedColumnObj]);
  };

  const selectAllFilter =(value) => {
    setOddFilterSelected(value);
    setEvenFilterSelected(value);
  }

  const onClickBuy = async (lotteryData) => {
    try {
      //e.preventDefault();

      const res = await Axios.post("/api/game/createNewGame", lotteryData);


      if (res.status === 200) {
        const response = res.data.payload;
        window.alert("success");
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        window.alert(error.response.data.message);
      }
    }
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
        allFilterSelected={allFilterSelected}
        oddFilterSelected={oddFilterSelected}
        evenFilterSelected={evenFilterSelected}
        selectAllFilter={selectAllFilter}
        setAllFilterSelected={setAllFilterSelected}
        setEvenFilterSelected={setEvenFilterSelected}
        setOddFilterSelected={setOddFilterSelected}
        columnXYObj={columnXYObj}
        setXYColumnobj={setXYColumnobj}
      />
      <div className="row">
        <div className="col-sm-1 bordered">
          <TenToThirtyNineCheckbox
            handleFilterCheckBox={handleFilterCheckBox}
            columnObj={columnObj}
            setColumnobj={setColumnobj}
          />
        </div>

      <Buttons onClickBuy={onClickBuy} columnXYObj={columnXYObj} setXYColumnobj={setXYColumnobj} setColumnobj={setColumnobj} columnObj={columnObj} />
    </div>
    </div>
  );
};

export default Lottary;
