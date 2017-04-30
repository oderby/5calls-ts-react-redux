import * as React from 'react';
import {IIssue} from '../model';

interface IProps {
  readonly issues: IIssue[];
  selectIssue: (issue: IIssue) => void;
}

interface IState {}

export default class IssueList extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  renderList() {
    if (!this.props.issues || this.props.issues.length === 0) {
      return (
        <li className="list-group-item">No issues are available</li>
      );
    }
    return this.props.issues.map((issue) => {
      return (
        <li key={issue.title}
        onClick={() => this.props.selectIssue(issue)}
        className="list-group-item">{issue.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
