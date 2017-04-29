import { IIssueListAction } from './index';
import { IIssue } from './../model';
import { Action } from 'redux';
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

export const issues: IIssue[] = [
      {title: 'Issue 1', details: 'issue 1 details'},
      {title: 'Issue 2', details: 'issue 2 details'},
      {title: 'Issue 3', details: 'issue 3 details'},
      {title: 'Issue 4', details: 'issue 4 details'},
    ];



export interface IIssueListAction extends Action {
  type: ActionType;
  payload: IIssue[];
}

export function findIssues(): IIssueListAction {
  return {
    type: ActionType.FIND_ISSUES,
    payload: issues
  };
}
