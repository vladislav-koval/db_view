import React from "react";
import Service from "../../../service/service";

const EntryItem = props => {

    return (
        <li>
            <span style={{"width": "31%"}}>{props.entry.id}</span>
            <span style={{"width": "31%"}}>{props.entry.name}</span>
            <span style={{"width": "31%"}}>{props.entry.description}</span>
            <span className="del_btn" style={{"width": "5%"}}
                  onClick={() => Service.deleteEntry(props.entry._id, props.entry._rev).then(() => props.onClick())}
            >
                delete
            </span>
        </li>
    );
};

export default EntryItem;
