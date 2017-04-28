import { IIssueListAction, issues, ActionType } from './../actions/index';
import { IIssue } from './../model';

const IssueListReducer = (state: IIssue[] = issues, action: IIssueListAction) => {
  switch (action.type) {
    case ActionType.FIND_ISSUES:
      return state;
    default:
      return state;
  }
};

export default IssueListReducer;
