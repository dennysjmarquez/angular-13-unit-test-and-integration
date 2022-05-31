import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicosService {
  constructor(private http: HttpClient) {
  }

  getMedicos():Observable<any> {
    return this.http.get<any>('...').pipe(map((resp) => resp['medicos']));
  }

  agregarMedico(medico: any):Observable<any> {
    return this.http.post<any>('...', medico).pipe(map((resp) => resp['medico']));
  }

  borrarMedico(id: string):Observable<any> {
    return this.http.delete<any>('...').pipe(map((resp) => resp['medico']));
  }
}
