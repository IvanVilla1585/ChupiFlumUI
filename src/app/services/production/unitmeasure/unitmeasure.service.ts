import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../libs/HttpClient';
import {Response} from "@angular/http";
import {HttpClient} from "selenium-webdriver/http";




@Injectable()
export class UnitmeasureService {

  private BASE_URL: string;

  constructor(private _httpService: HttpService){
    this.BASE_URL = 'http://localhost:8000/api';
  }

  list(): Observable<Response>{
    return this._httpService.get(`${this.BASE_URL}/unidadesmedidas/`);
  }

  save(data): Observable<Response>{
    return this._httpService.post(`${this.BASE_URL}/unidadesmedidas/`, JSON.stringify(data));
  }
}
