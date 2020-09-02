import { Component, OnInit } from '@angular/core';
import { WorkshopItem } from '../shared/model/model';
import { WorkshopService } from '../shared/services/workshop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ws-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {
  displayedColumns: string[] = ['user', 'workshop', 'ticketPrice', 'url', 'action'];
  dataSource: WorkshopItem[];

  constructor(
    private workshopService: WorkshopService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataSource = this.workshopService.getWorkshopItems();
  }

  editItem(item: WorkshopItem): void {

  }

  deleteItem(item: WorkshopItem): void {

  }
}
