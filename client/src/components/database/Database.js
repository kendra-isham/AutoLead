import React from "react"; //{ useState } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions/database";
import store from "../../store";

const Database = ({getData}) => {
    getData()
    return (
        <div>Hello world! You're in Database.js
        
        {console.log(store.getState().database.db)}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.database.db
});

// export 
export default connect(mapStateToProps, {getData})(Database);
