import { Component , EventEmitter, Input, Output} from '@angular/core';
import { carInterface } from '../car';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {


    @Input()
    cars: carInterface = {} as carInterface; // do pai para o filho

    @Output() // do filho para o pai
    saveEmitter = new EventEmitter();


    save(){
      this.saveEmitter.emit();
    }
}
