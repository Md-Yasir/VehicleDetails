import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  private BASE_URL = 'http://18.212.242.209';

  private GET_VEHICLE_DETAILS = this.BASE_URL + '/getVehicleDetails';



  constructor(private http: HttpClient) { }

  public getVehicleDetails(regNo1: string, regNo2: string) {

    let headers = new HttpHeaders()
      .set('response-type', 'json')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get(this.GET_VEHICLE_DETAILS + "?reg1=" + regNo1 + "&reg2=" + regNo2, { 'headers': headers });
  }

}
