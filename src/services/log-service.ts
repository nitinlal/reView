import {Injectable} from "@angular/core";

@Injectable()
export class LogService {
  constructor() {
  }

  public debug(key: string, value: any): void {
    console.log(key, value);
  }
}
