import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: [],
})
export class RouterMedicoComponent implements OnInit {
  id!: string;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: any) => {
      this.id = params['id']; // => nuevo
    });
  }

  async guardarMedico() {
    await this._router.navigate(['medico', '123']);
  }
}
