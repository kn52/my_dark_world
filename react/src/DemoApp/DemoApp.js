import React from "react";
import './DemoApp.scss';
class DemoApp extends React.Component{
    
    render(){
        return(
            <>
                <div className="main_radio_cont">
                    <div className="radio_cont radio_input">
                        <input type="radio" id="radio_check" name="radio-group"/>
                        <label htmlFor="radio_check"></label>
                    </div>
                    <div className="button_cont">
                        <button className="button_sts" onClick={() => window.location.replace("/")}>Reset</button>
                    </div>
                </div>
            </>
        )
    }

}

export default DemoApp;