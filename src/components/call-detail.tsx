import * as React from 'react';
import {IIssue} from '../model';
import Welcome from './welcome';

interface IProps {
  readonly issue: IIssue;
}
interface IState {}

class CallDetail extends React.Component<IProps, IState> {

  render() {
    if (!this.props.issue || !this.props.issue.name) {
      return (
        <Welcome/>
      );
    }
    return (
      <div>
        <h3>{this.props.issue.name}</h3>
        <div>Call this office:</div>
        <h4>{this.props.issue.contacts ? this.props.issue.contacts[0].Name : ''}</h4>
        <h5>{this.props.issue.contacts ? this.props.issue.contacts[0].Phone : ''}</h5>
        <div>Your script:</div>
        <div>{this.props.issue.script}</div>
      </div>
    );
  }
}

export default CallDetail;
