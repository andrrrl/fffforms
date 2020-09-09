import { WorkshopService } from './../shared/services/workshop.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, tap, map } from 'rxjs/operators';

@Component({
  selector: 'ws-workshop-edit',
  templateUrl: './workshop-edit.component.html',
  styleUrls: ['./workshop-edit.component.css']
})
export class WorkshopEditComponent implements OnInit {

  urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

  form: FormGroup = new FormGroup({
    user: new FormControl(null, Validators.required),
    workshop: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    ticketPrice: new FormControl(null, Validators.required),
    url: new FormControl(null, [Validators.pattern(this.urlPattern), Validators.minLength(10)]),
  });
  itemId: number;

  formStatusChange$: Observable<string>;
  formValueChange$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wsService: WorkshopService
  ) { }

  ngOnInit(): void {

    // Traemos id de URL, convertimos a number
    this.itemId = +this.route.snapshot.paramMap.get('id');

    // Traemos item desde el service
    const item = this.wsService.getWorkshopItem(this.itemId);

    // Aplicamos los datos al form, quitando el id
    this.form.patchValue(item);

    // this.form.statusChanges.subscribe(status => console.log(status));

    this.formStatusChange$ = this.form.statusChanges.pipe(
      distinctUntilChanged((a, b) => a === b),
      tap(status => console.log(status)),
      map(status => status.toUpperCase())
    );

    this.formValueChange$ = this.form.valueChanges.pipe(
      distinctUntilChanged((a, b) => a === b),
      tap(status => console.log(status)),
      map(status => status.toUpperCase())
    );


  }

  get usuario(): any {
    return this.form.get('user');
  }

  get workshop(): any {
    return this.form.get('workshop');
  }

  get ticketPrice(): any {
    return this.form.get('ticketPrice');
  }

  get url(): any {
    return this.form.get('url');
  }

  // Click
  editItem(): void {
    if (this.form.valid) {

      // Asignamos datos del formulario a nuestro item
      const item = this.form.value;

      // Volvemos a ponerle su id
      item.id = this.itemId;

      // Guardamos los datos
      this.wsService.updateWorkshopItem(item);

      this.router.navigate(['/']);

    }
  }

}
