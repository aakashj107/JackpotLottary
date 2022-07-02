import { useState } from "react";
import Buttons from "../../Subcomponents/Buttons";
import Columns from "../../Subcomponents/Columns";
import DrawStatus from "../../Subcomponents/DrawStatus";
import Filter from "../../Subcomponents/Filter";
import TenToThirtyNineCheckbox from "../../Subcomponents/TenToThirtyNineCheckbox";
import TotalResult from "../../Subcomponents/TotalResult";
import "./index.css";

const Lottary = () => {
  const [tenToNineTeen, setTenToNineTeen] = useState(false);
  const [thirtyToThirtyNine, setThirtyToThirtyNine] = useState(false);
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
    </div>
  );
};

export default Lottary;
