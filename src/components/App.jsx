import React, { Component } from "react";
import { connect } from "react-redux";
import { addReminder } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  addReminder = () => {
    this.props.addReminder(this.state.text);
    console.log("props", this.props);
  };

  renderReminder = () => {
    console.log("reminder", this.props);
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">{reminder.text}</div>
              <div className="list-item delete-btn">&#x2715;</div>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="app">
        <div className="title">Reminder</div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to ..."
              onChange={(event) => this.setState({ text: event.target.value })}
            />
            <button className="btn btn-success" onClick={this.addReminder}>
              Add Reminder
            </button>
          </div>
        </div>
        {this.renderReminder()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state,
  };
}

export default connect(mapStateToProps, { addReminder })(App);
