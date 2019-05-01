import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public loginname: BehaviorSubject<string> = new BehaviorSubject('未登录');

  constructor() {
  }
}
