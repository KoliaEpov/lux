import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiSettings } from './api.config';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}
  
  getInfo(postCode: string) {
    return this.http.get(ApiSettings.API_ENDPOINT + `/postcodes?q=${postCode}`);
  }
  
  getDetails(postCode: string) {
    return this.http.get(ApiSettings.API_ENDPOINT + `/postcodes/${postCode}`);
  }
  
}
