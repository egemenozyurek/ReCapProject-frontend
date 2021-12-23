import { ListResponseModel } from './../models/baseModels/listResponseModel';
import { Observable } from 'rxjs';
import { ApiUrl } from './apiUrl';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/entities/car';
import { CarDetailDto } from '../models/baseModels/carDetailDto';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiGetAllUrl = ApiUrl.baseUrl + 'api/cars/getall';
  private apiGetCarDetailsUrl = ApiUrl.baseUrl + 'api/cars/getcardetails';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(
      this.apiGetAllUrl
    );
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = ApiUrl.baseUrl + 'cars/getbybrand?brandid=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = ApiUrl.baseUrl + 'cars/getbycolor?colorid=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
