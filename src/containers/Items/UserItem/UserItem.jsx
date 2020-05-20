import React from "react";
import Service from "../../../service/service";

const UserItem = props => {

    return (
        <li>
            <span style={{"width": "25%"}}>{props.entry.id}</span>
            <span style={{"width": "10%"}}>{props.entry.name}</span>
            <span style={{"width": "15%"}}>{props.entry.surname}</span>
            <span style={{"width": "20%"}}>{props.entry.secure}</span>
            <span style={{"width": "30%"}}>{props.entry.description}</span>
            <span className="del_btn" style={{"width": "5%",}}
                  onClick={() => Service.deleteUser(props.entry._id, props.entry._rev).then(() => props.onClick())}
            >
                delete
            </span>
        </li>
    );
};

export default UserItem;
