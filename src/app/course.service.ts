import { Injectable } from '@angular/core';
import { Course } from './course';
import {Observable, of, throwError} from "rxjs/index";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

    // method to handle errors
    private handleError(error: HttpErrorResponse) {

        // client-side or network error
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred: ', error.error.message);
            // additional action to handle error goes here:

        } else { // backend error
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
            // additional action to handle error goes here:
        }

        return throwError ('Something bad happened!');
    }

    getCourses(): Observable<Course[]> {

        let url = 'http://wangziteng.com/api.php?api_key=testkey2';

        return this.http.get<Course[]>(url).pipe(catchError(this.handleError));
    }

    getCourse(code: string): Observable<Course> {
        let url = 'http://wangziteng.com/api.php?api_key=testkey2&code=';
        url = url.concat(code);

        return this.http.get<Course>(url).pipe(catchError(this.handleError));
    }
  constructor(private http: HttpClient) { }
}
