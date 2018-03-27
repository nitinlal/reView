import {School} from "../models/School";

export interface AppState {
  username: string;
  zipCode: string;
  schoolList: School[];
}
