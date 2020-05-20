import React, {Component} from "react";
import classes from './List.module.scss'
import EntryItem from "../Items/EntryItem/EntryItem";
import UserItem from "../Items/UserItem/UserItem";
import equal from 'fast-deep-equal'
import Service from "../../service/service";

class List extends Component {

    state = {
        entries: [],
    };

    reloadEntries = () => Service.getEntries(this.props.type)
        .then((docs) => docs.rows.map((row) => row.doc))
        .then(entries => entries.sort((a, b) => a.creationTime - b.creationTime))
        .then(entries => {
            this.setState({
                entries: entries
            });
        });

    componentDidMount() {
        this.reloadEntries()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.dirty || !equal(prevProps.type, this.props.type)) {
            this.reloadEntries()
        }
    }

    renderEntries() {
        return this.state.entries.map(entry => {
            return (
                <EntryItem onClick={this.props.onClick} key={entry.id} entry={entry}/>
            );
        });
    }

    renderUsers() {
        return this.state.entries.map(user => {
            return (
                <UserItem onClick={this.props.onClick} key={user.id} entry={user}/>
            )
        })
    }

    renderItems() {
        if (this.props.type === "entry") {
            return this.renderEntries();
        } else if (this.props.type === "user") {
            return this.renderUsers();
        }
        return null;
    }

    renderHead() {
        let head;
        if (this.props.type === "entry") {
            head = (
                <React.Fragment>
                    <span style={{"width": "31%"}}>Id</span>
                    <span style={{"width": "31%"}}>Name</span>
                    <span style={{"width": "31%"}}>Description</span>
                    <span style={{"width": "5%"}}> </span>
                </React.Fragment>
            )
        } else if (this.props.type === "user") {
            head = (
                <React.Fragment>
                    <span style={{"width": "25%"}}>Id</span>
                    <span style={{"width": "10%"}}>Name</span>
                    <span style={{"width": "15%"}}>Surname</span>
                    <span style={{"width": "20%"}}>Secret</span>
                    <span style={{"width": "30%"}}>Description</span>
                </React.Fragment>
            );
        }
        return head;
    }

    render() {
        return (
            <div className={classes.List}>
                <ul>
                    <li className={classes.head}>
                        {this.renderHead()}
                    </li>
                    {this.renderItems()}
                </ul>
            </div>
        );
    }

}

export default List;
