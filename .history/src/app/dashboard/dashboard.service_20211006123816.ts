import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    getVoters(data: any): Observable<any> {
      const url = environment.apiUrl +  'api/Inventory/' + supplier;
      return this.http
        .get<any>(url)
        .pipe(
          map((response) => {
              console.log('get specific supplier response ', response);
              return response;
          })
        );
    }
      // ADD NEW supplier
  addSupplier( data: any): Observable<any> {
    const url = environment.apiUrl + '/api/Inventory/';
    return this.http
      .post<any>(url, data)
      .pipe(
        map((response) => {
            console.log('create supplier response ', response);
            return response;
        })
      );
  }

}
