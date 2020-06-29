import React from "react";
import { connect } from "react-redux";

const Database = ({}) => {
    //get database info here 

    return (
        //will need a drop down of all search options for database info 
        <div>Hello world! You're in Database.js</div>

    );
};

// const mapStateToProps = (state) => ({
//     chat: state.watson.messages
// });

// export 
export default connect()(Database);