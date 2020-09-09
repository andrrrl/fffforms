import { Router } from '@angular/router';
import { WorkshopService } from './../shared/services/workshop.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WorkshopItem } from '../shared/model/model';

@Component({
  selector: 'ws-workshop-add',
  templateUrl: './workshop-add.component.html',
  styleUrls: ['./workshop-add.component.css']
})
export class WorkshopAddComponent implements OnInit {

  item: WorkshopItem = {};

  urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

  @ViewChild('form') form: FormControl;

  constructor(
    private wsService: WorkshopService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.form.valid) {
      this.wsService.addWorkshopItem(this.item);
      this.router.navigate(['/']);
    }
  }

}
