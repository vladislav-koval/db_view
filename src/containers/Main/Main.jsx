import React, {Component, Fragment} from "react";
import Button from "../../components/Button/Button";
import AddEntry from "../Forms/AddEntry/AddEntry";
import AddUser from "../Forms/AddUser/AddUser";
import List from "../List/List";

const ENTRY_TYPE = "entry";
const USER_TYPE = "user";

class Main extends Component {
    state = {
        type: ENTRY_TYPE,
        show: false,
        dirty: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.dirty) {
            this.setState({dirty: false})
        }
    }

    markDirty = () => {
        this.setState({dirty: true})
    }

    showEntryForm = () => {
        this.setState({
            type: ENTRY_TYPE,
        });
    };

    showUserForm = () => {
        this.setState({
            type: USER_TYPE,
        });
    };

    toggleShow = () => {
        this.setState({show: !this.state.show})
    };

    getForm = () => {
        switch (this.state.type) {
            case ENTRY_TYPE:
                return <AddEntry onClick={this.markDirty} show={this.state.show}/>
            case USER_TYPE:
                return <AddUser onClick={this.markDirty} show={this.state.show}/>
            default:
                return null
        }
    }

    render() {
        return (
            <Fragment>
                <div className="buttons">
                    <Button onClick={this.showEntryForm}>Entries</Button>
                    <Button onClick={this.showUserForm}>Users</Button>
                </div>
                <Button onClick={this.toggleShow}>{this.state.show ? "Close" : "Add +"}</Button>
                {this.getForm()}
                <List type={this.state.type} dirty={this.state.dirty} onClick={this.markDirty}/>
            </Fragment>
        );
    }
}

export default Main
