import React, { useState } from "react";
import { connect } from "react-redux";

const Login = ({login}) => {

    let[data, setData] = useState({
        pID: ""
    });

    onChange = e => {
        setData({ ...data, [e.target.name]: e.target.value}); 
    };

    const submitData = () => {
        console.log(data);
    }

    //gives us access to the pID 
    let {pID} = data;

    return(
        <div className="Login">
            <label onChange ={(e) => onChange(e)} value={pID} name="pID">pID: </label>
            <input type="username"/>
            <button onClick={() => submitData()}>Submit</button>
        </div>
    );
};

// const mapStateToProps = (state) => ({
//     login: state.????
// });

// // export 
// export default connect(mapStateToProps, {})(Login);