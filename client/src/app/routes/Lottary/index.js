import Buttons from '../../Subcomponents/Buttons';
import Columns from '../../Subcomponents/Columns';
import DrawStatus from '../../Subcomponents/DrawStatus';
import Filter from '../../Subcomponents/Filter';
import TenToThirtyNineCheckbox from '../../Subcomponents/TenToThirtyNineCheckbox';
import TotalResult from '../../Subcomponents/TotalResult';
import './index.css'

const Lottary = () => {
    return (
        <div className="container-fluid">
            {/* <div className="row bg-secondary text-white text-center">
	<h6>Welcome to Skill Game</h6>
</div> */}

            <DrawStatus />       
            <Filter />
            <div className="row">
                <div className="col-sm-1 bordered">  
                    <TenToThirtyNineCheckbox />
                </div>
                <Columns />
                <TotalResult />
            </div>

           <Buttons />
        </div>
    )
}

export default Lottary;