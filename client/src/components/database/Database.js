import React from "react"; 
import { connect } from "react-redux";
import { getData } from "../../actions/database";
import store from "../../store";
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import { Link } from "react-router-dom";


const Database = ({getData }) => {
    const handleClick = () => {
        getData();
    }

    //sets up ReactTable
    const columns = [
        {
            Header: "pID",
            accessor: "pID",
            style: {
                textAlign: "center"
            },
            width: 200,
            maxWidth: 200, 
            minWidth: 200
        },
        {
            Header: "Modem",
            accessor: "entity",
            style: {
                textAlign: "center"
            },
            width: 200,
            maxWidth: 200, 
            minWidth: 200
        },
        {
            Header: "Topic",
            accessor: "intent",
            style: {
                textAlign: "center"
            },
            width: 200,
            maxWidth: 200, 
            minWidth: 200
        },
    ]

    return (
        <div className="databaseWrapper">
            <h2>Get information about asked questions</h2>
            <p>Click headers to sort by pID, modem, or topic</p>
            <p>Search by pID, modem, or topic. Must be exact match</p>
            <Link to="/chat" className="button">Back to Chat</Link>
            <div className="database">
            <ReactTable
                id="dbTable"
                columns={columns}
                data={store.getState().database.db}
                filterable
                defaultPageSize={5}
                noDataText={"Please click the button below to display data"}
            />
            <br/>
            <button className="button" id="dbButton1" onClick={handleClick}>Display Data</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.database.db
});

// export 
export default connect(mapStateToProps, {getData})(Database);
