import { IIssue } from '../model';
import { Action } from 'redux';
import { getIssues } from '../data';
/*
 * This file holds Action Creators
 * Action Creators return an Action
 *
 */

export enum ActionType {
  ISSUE_SELECTED,
  FIND_ISSUES
}

export interface IIssueSelectedAction extends Action {
  type: ActionType;
  payload: IIssue;
}

export function selectIssue(issue): IIssueSelectedAction {
  return {
    type: ActionType.ISSUE_SELECTED,
    payload: issue
  };
}

export interface IIssueListAction extends Action {
  type: ActionType;
  payload: IIssue[];
}

export function findIssues(): IIssueListAction {
  return {
    type: ActionType.FIND_ISSUES,
    payload: getIssues()
  };
}
