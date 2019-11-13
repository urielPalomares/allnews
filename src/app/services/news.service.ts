import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  getNewsList(): Promise<any> {
    return this.httpClient
      .get('assets/data/news.json')
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
}
