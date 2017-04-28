import { IIssue } from './../model';
import { IIssueSelectedAction } from './../actions/index';
/**
 */
const ActiveIssue = (state: IIssue = {title: ''}, action: IIssueSelectedAction) => {
  switch (action.type) {
    case 'ISSUE_SELECTED':
      return action.payload;
    default:
      return state;
  }
};

export default ActiveIssue;

