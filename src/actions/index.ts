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
  FIND_ISSUES,
  LOCATION_CLEAR,
  LOCATION_SET
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

export interface ILocationSetAction extends Action {
  type: ActionType;
  payload: string;
}

export function setAddress(address): ILocationSetAction {
  return {
    type: ActionType.LOCATION_SET,
    payload: address
  };
}

export interface ILocationClearedAction extends Action {
  type: ActionType;
}

export function clearAddress(): ILocationClearedAction {
  return {
    type: ActionType.LOCATION_CLEAR
  };
}
