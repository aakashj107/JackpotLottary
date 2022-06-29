import './index.css'

const Lottary = () => {
    return (


        <div className="container-fluid">

            <div className="row bg-danger bg-opacity-10 text-secondary">
                <div className="col-sm-3 border"><h5>Terminal ID - RET001</h5></div>
                <div className="col-sm-3 border"><h5>Balance Points - 17678 </h5></div>
                <div className="col-sm-4 border"></div>
                <div className="col-sm-2 border">
                    <div className="float-end">
                        <button type="button" className="btn btn-secondary btn-sm"> Password </button>
                        <button type="button" className="btn btn-secondary btn-sm"> Logout </button>
                    </div>
                </div>
            </div>


            {/* <div className="row bg-secondary text-white text-center">
	<h6>Welcome to Skill Game</h6>
</div> */}



            <div className="row text-dark border">
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> LAST DRAW </h6></div>
                    <div className="row text-center"> <h4> 02:30:00 PM </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> NEXT DRAW </h6></div>
                    <div className="row text-center"><h4> 02:45:00 PM </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> TIME </h6></div>
                    <div className="row text-center"> <h4> 02:41:17 PM </h4> </div>
                </div>
                <div className="col-sm-3 border">
                    <div className="row bg-secondary text-dark text-center fw-bold"><h6> TIME LEFT </h6></div>
                    <div className="row text-center"><h4> 00:02:11 </h4> </div>
                </div>
            </div>

            <div className="row border">
                <div className="col-sm-1 bg-danger py-2 border">
                    <div className="form-check form-check-inline ">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label fw-bold text-white" for="inlineCheckbox1">10 to 19</label>
                    </div>
                </div>
                <div className="col-sm-1 bg-danger py-2 border">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label fw-bold text-white" for="inlineCheckbox2"> 30 to 39</label>
                    </div>
                </div>
                <div className="col-sm-3 bg-danger py-2 border">
                    <div className="form-check form-check-inline ">
                        <input className="col-sm-3" type="text" maxLength="3" />
                            <button type="button" className="btn btn-secondary btn-sm ms-1 "><div className="fw-bold"> L P </div></button>
                        
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label fw-bold text-white" for="inlineCheckbox2">FP</label>
                    </div>
                </div>
                <div className="col-sm-2 bg-danger py-2 border">
                    <div className="form-check form-check-inline ">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label fw-bold text-white" for="inlineCheckbox1">All </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label fw-bold text-white" for="inlineCheckbox2"> Odd </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label fw-bold text-white" for="inlineCheckbox2"> Even </label>
                    </div>
                </div>
                <div className="d-grid col-sm-2 mx-auto">
                    <button className="btn btn-danger fw-bold" type="button">Advance</button>
                </div>

            </div>

            <div className="row">
                <div className="col-sm-1 bordered">
                    <div className="row ">
                        <table className="table table-bordered">
                            <tr className="bg-danger">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
                            <tr className="bg-white">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            10
                                        </label>
                                    </div>
                                </th>
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            30
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr className="bg-white">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            11
                                        </label>
                                    </div>
                                </th>
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            31
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr className="bg-white">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            12
                                        </label>
                                    </div>
                                </th>
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            32
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr className="bg-white">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            13
                                        </label>
                                    </div>
                                </th>
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            33
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr className="bg-white">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            14
                                        </label>
                                    </div>
                                </th>
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            34
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr className="bg-white">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            15
                                        </label>
                                    </div>
                                </th>
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            35
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr className="bg-white">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            16
                                        </label>
                                    </div>
                                </th>
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            36
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr className="bg-white">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            17
                                        </label>
                                    </div>
                                </th>
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            37
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr className="bg-white">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            18
                                        </label>
                                    </div>
                                </th>
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            38
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr className="bg-white">
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            19
                                        </label>
                                    </div>
                                </th>
                                <th>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            39
                                        </label>
                                    </div>
                                </th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-sm-8 border">
                <div className="row">
                    <table className="table table-borderless fw-bold">
                        <thead>
                            <tr className="bg-warning">
                                <th scope="col"><h5 className="text-center"></h5></th>
                                <th scope="col">X0 <input className="col-sm-8" type="text" maxLength="3"/> </th>
                                <th scope="col">X1 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <th scope="col">X2 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <th scope="col">X3 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <th scope="col">X4 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <th scope="col">X5 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <th scope="col">X6 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <th scope="col">X7 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <th scope="col">X8 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <th scope="col">X9 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white">
                                <th scope="row">Y0 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <td>00 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>01 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>02 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>03 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>04 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>05 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>06 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>07 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>08 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>09 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                            </tr>
                            <tr className="bg-warning">
                                <th scope="row" >Y1 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <td>10  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>11  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>12  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>13  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>14  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>15  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>16  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>17  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>18  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>19  <input className="col-sm-8" type="text" maxLength="3"/></td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row">Y2 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <td>20 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>21 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>22 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>23 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>24 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>25 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>26 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>27 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>28 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>29 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                            </tr>
                            <tr className="bg-warning">
                                <th scope="row" >Y3 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <td>30  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>31  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>32  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>33  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>34  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>35  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>36  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>37  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>38  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>39  <input className="col-sm-8" type="text" maxLength="3"/></td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row">Y4 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <td>40 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>41 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>42 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>43 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>44 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>45 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>46 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>47 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>48 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>49 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                            </tr>
                            <tr className="bg-warning">
                                <th scope="row" >Y5 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <td>50  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>51  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>52  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>53  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>54  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>55  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>56  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>57  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>58  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>59  <input className="col-sm-8" type="text" maxLength="3"/></td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row">Y6 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <td>60 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>61 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>62 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>63 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>64 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>65 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>66 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>67 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>68 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>69 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                            </tr>
                            <tr className="bg-warning">
                                <th scope="row" >Y7 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <td>70  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>71  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>72  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>73  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>74  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>75  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>76  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>77  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>78  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>79  <input className="col-sm-8" type="text" maxLength="3"/></td>
                            </tr>
                            <tr className="bg-white">
                                <th scope="row">Y8 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <td>80 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>81 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>82 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>83 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>84 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>85 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>86 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>87 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>88 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                                <td>89 <input className="col-sm-8" type="text" maxLength="3"/> </td>
                            </tr>
                            <tr className="bg-warning">
                                <th scope="row" >Y9 <input className="col-sm-8" type="text" maxLength="3" /> </th>
                                <td>90  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>91  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>92  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>93  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>94  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>95  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>96  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>97  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>98  <input className="col-sm-8" type="text" maxLength="3"/></td>
                                <td>99  <input className="col-sm-8" type="text" maxLength="3"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-sm-3 border">
                <div className="row">
                    <div className="col-sm-6 border bg-warning">
                        <div className="row">
                            <table className="table table-bordered">
                                <thead>
                                    <tr >
                                        <th scope="col"><h6>Total</h6></th>
                                        <th scope="col"><h6>Point</h6></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <th><h6>0</h6></th>
                                        <th><h6>0</h6></th>
                                    </tr>
                                    <tr>
                                        <th><h6>0</h6></th>
                                        <th><h6>0</h6></th>
                                    </tr>
                                    <tr>
                                        <th><h6>0</h6></th>
                                        <th><h6>0</h6></th>
                                    </tr>
                                    <tr>
                                        <th><h6>0</h6></th>
                                        <th><h6>0</h6></th>
                                    </tr>
                                    <tr>
                                        <th><h6>0</h6></th>
                                        <th><h6>0</h6></th>
                                    </tr>
                                    <tr>
                                        <th><h6>0</h6></th>
                                        <th><h6>0</h6></th>
                                    </tr>
                                    <tr>
                                        <th><h6>0</h6></th>
                                        <th><h6>0</h6></th>
                                    </tr>
                                    <tr>
                                        <th><h6>0</h6></th>
                                        <th><h6>0</h6></th>
                                    </tr>
                                    <tr>
                                        <th><h6>0</h6></th>
                                        <th><h6>0</h6></th>
                                    </tr>
                                    <tr>
                                        <th><h6>0</h6></th>
                                        <th><h6>0</h6></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-sm-6 bg-danger border">
                        <div className="row">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col"><h4 className="text-center fw-bold ">RESULT</h4></th>
                                    </tr>
                                </thead>
                            </table>
                            <table className="table bg-danger table-bordered">
                                <tbody>
                                    <tr >
                                        <th><h6 className="text-center fw-bold"> 10</h6></th>
                                        <th><h6 className="text-center fw-bold">00</h6></th>
                                        <th><h6>30</h6></th>
                                        <th><h6>00</h6></th>
                                    </tr>
                                    <tr >
                                        <th><h6>11</h6></th>
                                        <th><h6>00</h6></th>
                                        <th><h6>31</h6></th>
                                        <th><h6>00</h6></th>
                                    </tr>
                                    <tr >
                                        <th><h6>12</h6></th>
                                        <th><h6>00</h6></th>
                                        <th><h6>32</h6></th>
                                        <th><h6>00</h6></th>
                                    </tr>
                                    <tr >
                                        <th><h6>13</h6></th>
                                        <th><h6>00</h6></th>
                                        <th><h6>33</h6></th>
                                        <th><h6>00</h6></th>
                                    </tr>
                                    <tr >
                                        <th><h6>14</h6></th>
                                        <th><h6>00</h6></th>
                                        <th><h6>34</h6></th>
                                        <th><h6>00</h6></th>
                                    </tr>
                                    <tr >
                                        <th><h6>15</h6></th>
                                        <th><h6>00</h6></th>
                                        <th><h6>35</h6></th>
                                        <th><h6>00</h6></th>
                                    </tr>
                                    <tr >
                                        <th><h6>16</h6></th>
                                        <th><h6>00</h6></th>
                                        <th><h6>36</h6></th>
                                        <th><h6>00</h6></th>
                                    </tr>
                                    <tr >
                                        <th><h6>17</h6></th>
                                        <th><h6>00</h6></th>
                                        <th><h6>37</h6></th>
                                        <th><h6>00</h6></th>
                                    </tr>
                                    <tr >
                                        <th><h6>18</h6></th>
                                        <th><h6>00</h6></th>
                                        <th><h6>38</h6></th>
                                        <th><h6>00</h6></th>
                                    </tr>
                                    <tr >
                                        <th><h6>19</h6></th>
                                        <th><h6>00</h6></th>
                                        <th><h6>39</h6></th>
                                        <th><h6>00</h6></th>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="row py-2">
                <div className="col-sm-2 ">
                    <div className="form-floating bg-primary">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Ticker Number" />
                    </div>
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-info" type="button">Claim (F1)</button>
                </div>
                <div className="col-sm-7 ">
                    <div className="d-grid gap-2 d-md-block">

                        <button className="btn btn-success" type="button">Transacations Details (F2)</button>
                        <button className="btn btn-secondary" type="button">My Account (F3)</button>
                        <button className="btn btn-danger" type="button">Results (F4) </button>
                        <button className="btn btn-info" type="button"> Clear All (F9)</button>
                        <button className="btn btn-primary" type="button"> Buy (F5)</button>
                    </div>
                </div>
                <div className="col-sm-2 ">
                    <div className="row">
                        <div className="col-sm-6">
                            <span> <h4 className="ms-2 mt-2"> TOTAL </h4></span>
                        </div>
                        <div className="col-sm-6">
                            <span> <h4 className="mt-2 bg-warning bg-opacity-10 border fw-bold text-center"> 340 </h4></span>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Lottary;