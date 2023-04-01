import { Component , EventEmitter, Input, Output} from '@angular/core';
import { carInterface } from '../car';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {


  @Input()
  objCar : carInterface = {} as carInterface;

  @Output()
  saveEmitter = new EventEmitter();

  save(): void {
    this.saveEmitter.emit()

  }

}
