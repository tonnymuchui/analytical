import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(    private http: HttpClient,
    private router: Router) { }
}
