import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  get headers(): HttpHeaders {
    return new HttpHeaders()
      .append('Access-Control-Allow-Origin', '*');
  }

  constructor(
    private http: HttpClient,
  ) { }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, {params}).pipe(
      catchError((error) => this.handleError(error)),
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const extractError = new Error(error.error);
    return throwError(extractError); 
  }
}
