import { IIssue } from './../model';
import { IIssueSelectedAction, ActionType } from './../actions/index';
/**
 */
const ActiveIssue = (state: IIssue = {title: ''}, action: IIssueSelectedAction) => {
  switch (action.type) {
    case ActionType.ISSUE_SELECTED:
      return action.payload;
    default:
      return state;
  }
};

export default ActiveIssue;

