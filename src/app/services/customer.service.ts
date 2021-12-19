import { ListResponseModel } from './../models/baseModels/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from './apiUrl';
import { Injectable } from '@angular/core';
import { Customer } from '../models/entities/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private getAllUrl: string = ApiUrl.baseUrl + 'api/customer/getall';
  constructor(private httpClient: HttpClient) {}

  getAllCustomers(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.getAllUrl);
  }
}
