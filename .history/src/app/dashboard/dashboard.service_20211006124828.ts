import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
    private router: Router)
   { }


      // Get Voters
      getVoters(): Observable<any> {
        const url = environment.apiUrl +  'api/Inventory/supplier';
        return this.http
          .get<any>(url)
          .pipe(
            map((response) => {
                console.log('get Voters response ', response);
                return response;
            })
          );
      }

    // Get specific Voters
    getVoter(data: any): Observable<any> {
      const url = environment.apiUrl +  'api/Inventory/' + data;
      return this.http
        .get<any>(url)
        .pipe(
          map((response) => {
              console.log('get specific Voters response ', response);
              return response;
          })
        );
    }
      // ADD NEW Voters
  addVoters( data: any): Observable<any> {
    const url = environment.apiUrl + '/api/Inventory/';
    return this.http
      .post<any>(url, data)
      .pipe(
        map((response) => {
            console.log('create Voters response ', response);
            return response;
        })
      );
  }

}
