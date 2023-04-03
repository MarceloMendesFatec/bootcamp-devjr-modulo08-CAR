import { Component } from '@angular/core';
import { carInterface } from '../car';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

    newCar : carInterface = {} as carInterface; // componente pai passando este objeto para componente filho


    carsArray : carInterface[] = [
        {
          id: 1,
          name: 'Focus',
          manufacture: 'Ford',
          price: 100000,
          year: 2013
        },
        {
          id: 2,
          name: 'Corolla',
          manufacture: 'Toyota',
          price:3100000,
          year: 2019
        },
        {
          id: 3,
          name: 'Accord',
          manufacture: 'Honda',
          price: 200000,
          year: 2015
        }
    ]

    saveCar(){
      this.carsArray.push(this.newCar);
      this.newCar.id = this.carsArray.length ;
      this.newCar = {} as carInterface;
    }

}
