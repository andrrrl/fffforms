import { WorkshopItem } from './../model/model';
import { Injectable } from '@angular/core';
import { WorkshopItem } from '../model/model';

const DATA: WorkshopItem[] = [
  {
    id: 1, user: 'René Magritte', workshop: 'Angular Surrealist Forms', ticketPrice: 0.0,
    url: 'https://www.ecured.cu/images/0/08/Rene_magritte.jpg'
  },
  {
    id: 2, user: 'Syd Barrett', workshop: 'Learn Psychodelia Schematics', ticketPrice: 0.0,
    url: 'https://upload.wikimedia.org/wikipedia/en/f/ff/Syd.jpg'
  },
  {
    id: 3, user: 'Agnès Varda', workshop: 'Performant Nouvelle Vague Films', ticketPrice: 0.0,
    url: 'https://www.eluniversal.com.mx/sites/default/files/2019/03/29/agnes_varda.jpg'
  },
  {
    id: 4, user: 'Cindy Sherman', workshop: 'Angular Photography', ticketPrice: 0.0,
    url: 'https://bit.ly/2Gaqiyf'
  },
  {
    id: 5, user: 'Auguste Rodin', workshop: 'Mastering Marble Chisel', ticketPrice: 0.0,
    url: 'https://www.biografiasyvidas.com/biografia/r/fotos/rodin.jpg'
  },
  {
    id: 6, user: 'Charles Bukowski', workshop: 'Beer + Typescript', ticketPrice: 0.0,
    url: 'https://bit.ly/3lzmS8F'
  },
];

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  constructor() { }

  getWorkshopItems(): WorkshopItem[] {
    return DATA;
  }

  getWorkshopItem(id): WorkshopItem {
    return DATA.find(item => item.id === id);
  }

  addWorkshopItem(item: WorkshopItem): void {
    item.id = Math.floor(Math.random() * 10000);
    DATA.push(item);
  }

  updateWorkshopItem(item: WorkshopItem): void {
    const idx = DATA.findIndex(x => x.id === item.id);
    DATA[idx] = item;
  }

}
