import {Action} from "@ngrx/store";

export const INCREMENT = 'INCREMENT';

function assertNever(value: never) {
  throw new Error('Missing case statement');
}

export function schoolReducer (numberOfSchools: number, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return numberOfSchools + 1;
    default:
      return numberOfSchools;
  }

 //  assertNever(action.type);
}
