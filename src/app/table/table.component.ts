import { Component } from '@angular/core';
import { carInterface } from '../car';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

cars : carInterface = {} as carInterface;


carsTest : carInterface[] = [
    {
      id: 1,
      name: 'Ford',
      manufacture: 'Toyota',
      price: 100000,
      year: 2013
    },
    {
      id: 2,
      name: 'Ford',
      manufacture: 'Toyota',
      price:3100000,
      year: 2019
    },
    {
      id: 3,
      name: 'Ford',
      manufacture: 'Toyota',
      price: 200000,
      year: 2015
    }
]


changeCar(selectedCar : carInterface) {
  console.log(this.carsTest);
}
}
