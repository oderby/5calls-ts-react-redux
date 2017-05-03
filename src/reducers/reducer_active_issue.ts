import { Reducer } from 'redux';
import { IIssue } from './../model';
import { IIssueSelectedAction, ActionType } from './../actions/index';
/**
 */
const activeIssueReducer: Reducer<IIssue> = (state: IIssue = {id: 99, name: ''}, action: IIssueSelectedAction) => {
  switch (action.type) {
    case ActionType.ISSUE_SELECTED:
      return action.payload;
    default:
      return state;
  }
};

export default activeIssueReducer;

