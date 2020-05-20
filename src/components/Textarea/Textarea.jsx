import React from "react";
import classes from "./Textarea.module.scss";

const Textarea = props => {
    const cls = [classes.Textarea];
    const htmlFor = `${Math.random()}`;

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <textarea
                   id={htmlFor}
                   onChange={props.onChange}
                   value={props.value}/>
        </div>
    );
};

export default Textarea;
