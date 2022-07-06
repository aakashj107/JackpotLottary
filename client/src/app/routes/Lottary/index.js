import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Buttons from "../../Subcomponents/Buttons";
import Columns from "../../Subcomponents/Columns";
import DrawStatus from "../../Subcomponents/DrawStatus";
import Filter from "../../Subcomponents/Filter";
import TenToThirtyNineCheckbox from "../../Subcomponents/TenToThirtyNineCheckbox";
import TotalResult from "../../Subcomponents/TotalResult";
import "./index.css";


const Lottary = () => {

  const auth = useSelector((state) => state.auth);

  const [tenToNineTeen, setTenToNineTeen] = useState(false);
  const [thirtyToThirtyNine, setThirtyToThirtyNine] = useState(false);

  const onClickBuy = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post("/api/game/createNewGame", {
        lottery_amt:[{count:0,value:5},{count:1,value:5},{count:2,value:5}],
        lottery:[11,12,13,14,15]
      });


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


  const getUserDetails = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.get("/api/user/me");


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
      {/* <div className="row bg-secondary text-white text-center">
	<h6>Welcome to Skill Game</h6>
</div> */}

      <DrawStatus />
      <Filter
        setTenToNineTeen={setTenToNineTeen}
        setThirtyToThirtyNine={setThirtyToThirtyNine}
      />
      <div className="row">
        <div className="col-sm-1 bordered">
          <TenToThirtyNineCheckbox
            checkTenToNineTeen={tenToNineTeen}
            checkThirtyToThirtyNine={thirtyToThirtyNine}
          />
        </div>
        <Columns />
        <TotalResult />
      </div>

      <Buttons /> 
      <button onClick={onClickBuy}>buy</button>
      <button onClick={getUserDetails}>getUserDetails</button>
      
    </div>
  );
};

export default Lottary;
