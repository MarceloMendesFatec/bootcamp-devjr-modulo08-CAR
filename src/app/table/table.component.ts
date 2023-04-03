import { Component } from '@angular/core';
import { carInterface } from '../car';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

    newCar : carInterface = {} as carInterface; // componente pai passando este objeto para componente filho
    isUpdate : boolean = false;

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
      if(!this.isUpdate){
        this.carsArray.push(this.newCar);
        this.newCar.id = this.carsArray.length;
      }

      this.newCar = {} as carInterface;
    }

    update(selectedCar : carInterface) {
      this.newCar = selectedCar;
      this.isUpdate = true;
    }

    remove(removeCar : carInterface){
      this.carsArray = this.carsArray.filter(c => c !== removeCar);
    }
}
