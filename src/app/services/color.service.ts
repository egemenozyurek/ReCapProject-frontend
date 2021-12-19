import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from './apiUrl';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/baseModels/listResponseModel';
import { Color } from '../models/entities/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private getAllUrl = ApiUrl.baseUrl + 'api/color/getall';
  constructor(private httpClient: HttpClient) {}

  getAllColor(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.getAllUrl);
  }
}
