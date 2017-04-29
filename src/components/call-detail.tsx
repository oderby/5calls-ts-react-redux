import * as React from 'react';
import {IIssue} from '../model';

interface IProps {
  issue: IIssue;
}
interface IState {}

class CallDetail extends React.Component<IProps, IState> {

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

export default CallDetail;
