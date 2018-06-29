import { Injectable } from '@angular/core';
import { Job } from './job';
import { JobDetail } from './job-detail';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened!');
  }

  getJobList(): Observable<Job[]>{
    return this.http.get<Job[]>('http://andybao.net/apis/magic.php?api_key=123&job=a').pipe(
      catchError(this.handleError)
    );  
  }

  getJob(id: string): Observable<JobDetail>{
      return this.http.get<JobDetail>(`http://andybao.net/apis/magic.php?api_key=123&id=${id}`).pipe(
        catchError(this.handleError)
      ); 
  }

  constructor(
    private http: HttpClient
  ) { }
}
