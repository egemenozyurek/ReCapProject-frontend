import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from './apiUrl';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/baseModels/listResponseModel';
import { Brand } from '../models/entities/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private getAllUrl = ApiUrl.baseUrl + 'api/brand/getall';
  constructor(private httpClient: HttpClient) {}

  getAllBrand(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.getAllUrl);
  }
}
