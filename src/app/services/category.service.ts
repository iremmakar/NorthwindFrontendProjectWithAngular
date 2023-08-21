import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'https://localhost:44387/api/category/getall';
  constructor(private httClient: HttpClient) {}

  getCategory(): Observable<ListResponseModel<Category>> {
    return this.httClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
