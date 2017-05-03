import * as React from 'react';
import {IIssue} from '../model';
import glamorous from 'glamorous';

const HandCursorStyle = glamorous.span({
  cursor: 'pointer'
});

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
        <HandCursorStyle><li key={issue.id}
        onClick={() => this.props.selectIssue(issue)}
        className="list-group-item hand-cursor">{issue.name}</li></HandCursorStyle>
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
