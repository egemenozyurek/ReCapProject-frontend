import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from './apiUrl';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/baseModels/listResponseModel';
import { RentalDetail } from '../models/entities/rentalDetail';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  getallrentaldetailsUrl: string =
    ApiUrl.baseUrl + 'api/rental/getallrentaldetails';
  constructor(private httpClient: HttpClient) {}

  getAllRentalDetails(): Observable<ListResponseModel<RentalDetail>> {
    return this.httpClient.get<ListResponseModel<RentalDetail>>(
      this.getallrentaldetailsUrl
    );
  }
}
