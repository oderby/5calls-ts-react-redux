import { Reducer } from 'redux';
import { IIssueListAction, ActionType } from './../actions/index';
import { IIssue } from '../model';
import { getIssues } from '../data';

const issueListReducer: Reducer<IIssue[]> = (
  state: IIssue[] = [{id: 99, name: ''}],
  action: IIssueListAction) => {
  const issues = getIssues();
  switch (action.type) {
    case ActionType.FIND_ISSUES:
      return issues;
    default:
      return issues;
  }
};

export default issueListReducer;
