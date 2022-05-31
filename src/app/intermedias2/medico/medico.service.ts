import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class MedicoService {
	constructor(private http: HttpClient) {}

	getMedicos() {
		return this.http.get<any[]>('...');
	}
}
