import React from "react" //{ useState } from "react";
import { connect } from "react-redux";
//import axios from "axios";
import { getData } from "../../actions/database";

const Database = ({getData}) => {
    //get database info here 
    //const res = axios.get("/watson/data");
    //console.log(res);
    //const [data] = useState("");
    getData()
    
    return (
        //will need a drop down of all search options for database info 
        <div>Hello world! You're in Database.js
        
        <br/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    database: state.watson.data
});

// export 
export default connect(mapStateToProps, {getData})(Database);

// export 
//export default (Database);