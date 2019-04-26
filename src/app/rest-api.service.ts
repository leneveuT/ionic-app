import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost/ionic-api";

@Injectable({
providedIn: 'root'
})
export class RestApiService {
constructor(private http: HttpClient) { }

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
  // A client-side or network error occurred. Handle it accordingly.
  console.error('An error occurred:', error.error.message);
  } else {
  // The backend returned an unsuccessful response code.
  // The response body may contain clues as to what went wrong,
  console.error(
  `Backend returned code ${error.status}, ` +
  `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}

  getChevaux(): Observable<any> {
    const url = `${apiUrl}/cheval/readAll.php`;
    console.log('url ' + url);
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getChevalById(id: string): Observable<any> {
    const url = `${apiUrl}/cheval/readById.php/?id=${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  addCheval(id : string, nom : string, sexe : string, prixDepart : string): Observable<any> {
    const url = `${apiUrl}/cheval/create.php`;
    let postData = new FormData();
    postData.append('id', id);
    postData.append('nom', 'nom');
    postData.append('sexe', sexe);
    postData.append('prixDepart', prixDepart);

    return this.http.post(url, postData).pipe(
    map(this.extractData),
    catchError(this.handleError));
    }


    getClients(): Observable<any> {
      const url = `${apiUrl}/client/readAll.php`;
      console.log('url ' + url);
      return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
    }
}
