import {BaseService} from "./base-service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

export class SchoolService extends BaseService {
  constructor(private http: HttpClient, url: string) {
    super(url);
  }

  public getSchoolListFromZipCode(code: string): Observable<any> {
    return this.http.get('')
  }
}
