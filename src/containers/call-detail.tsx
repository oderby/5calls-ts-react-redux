import * as React from 'react';
import { connect } from 'react-redux';
import {IIssue} from '../model';

interface IStateProps {
  issue: IIssue;
}

class CallDetail extends React.Component<IStateProps, void> {

  render() {
    if (!this.props.issue || !this.props.issue.title) {
      return (
        <div>Please select an Issue</div>
      );
    }
    return (
      <div>
        <h3>Issue: {this.props.issue.title}</h3>
        <div>Details: {this.props.issue.details}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    issue: state.activeIssue
  };
}

export default connect<IStateProps, void, void>(mapStateToProps)(CallDetail);
