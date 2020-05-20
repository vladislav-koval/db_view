import React, {Component} from "react";
import classes from "./../AddEntry/AddEntry.module.scss"
import Input from "../../../components/Input/Input";
import Textarea from "../../../components/Textarea/Textarea";
import Button from "../../../components/Button/Button";

import {getTextareaField, getUserInputs} from "../../../service/formService";
import Service from "../../../service/service";

class AddUser extends Component {

    state = {
        inputControls: {...getUserInputs()},
        textareaControl: {...getTextareaField()}
    };
    onChangeInput = (event, controlName) => {
        const inputControls = {...this.state.inputControls};
        const control = {...inputControls[controlName]};

        control.value = event.target.value;
        inputControls[controlName] = control;

        this.setState({inputControls});
    };

    onChangeTextarea = event => {
        const textareaControl = {...this.state.textareaControl};
        textareaControl.value = event.target.value;

        this.setState({textareaControl});
    };

    addEntryHandler = () => {
        const entry = {
            name: this.state.inputControls.name.value,
            surname: this.state.inputControls.surname.value,
            secure: this.state.inputControls.secure.value,

            description: this.state.textareaControl.value,
        };

        Service.addUser(entry).then(() => {
            this.props.onClick();
        });

        this.setState({
            inputControls: {...getUserInputs()},
            textareaControl: {...getTextareaField()}
        });
    };

    renderInputs() {
        return Object.keys(this.state.inputControls).map((controlName, index) => {
            const control = this.state.inputControls[controlName];
            return (
                <Input
                    key={index}
                    label={control.label}
                    value={control.value}
                    type={control.type}
                    onChange={(event) => this.onChangeInput(event, controlName)}
                />
            )
        })
    }

    render() {
        const cls = [classes.form];
        if (this.props.show) {
            cls.push(classes.show);
        }
        return (
            <div className={cls.join(' ')}>
                <h2>Add user</h2>
                {this.renderInputs()}
                <Textarea
                    label={this.state.textareaControl.label}
                    value={this.state.textareaControl.value}
                    onChange={event => this.onChangeTextarea(event)}
                />
                <div className={classes.buttons}>
                    <Button onClick={this.addEntryHandler}>Add</Button>
                </div>
            </div>
        );
    }
}

export default AddUser;
