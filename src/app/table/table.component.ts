import { Component } from '@angular/core';
import { carInterface } from '../car';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

    newCar : carInterface = {} as carInterface; // componente pai passando este objeto para componente filho
    isUpdate : boolean = false; // um valor booleano que indica para o saveCar() se esta atualizando um carro existente ou adicionando um novo
    count : number = 4; // utilizado para contar o ID

    carsArray : carInterface[] = [ // array de objetos carInterface que representa a lista de carros
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

  saveCar() {//um método que adiciona um novo carro ao carsArray ou atualiza um carro existente, dependendo do valor de isUpdate
      if(!this.isUpdate){
        this.carsArray.push(this.newCar);
        this.newCar.id = this.count;
        this.count++;
      }

      this.newCar = {} as carInterface;
      this.isUpdate = false;
    }

  update(selectedCar: carInterface) {//um método que define newCar para o carro selecionado e define isUpdate como true para preparar a edição
      this.newCar = selectedCar;
      this.isUpdate = true;

    }

    remove(removeCar : carInterface){// remove um carro do  carsArray
      this.carsArray = this.carsArray.filter(c => c !== removeCar);
    }
}
