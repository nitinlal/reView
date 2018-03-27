import {BaseService} from "./base-service";
import {User} from "../models/user";

export class UserService extends BaseService {
  constructor(url: string) {
    super(url);
  }

  public getLoggedInUser(): User {
    return {
      userId: '1',
      userName: 'Test',
      zipCode: '97232',
    }
  }
}
