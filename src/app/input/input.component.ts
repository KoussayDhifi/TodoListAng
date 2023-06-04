import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  public tasks:string[] = [];

  addTask (x:any) {
    if (x.value.trim() != '') {
      this.tasks.push(x.value.trim());
    }
    x.value = '';
  }
  delTask (x:number) {
    setTimeout (() => {
      this.tasks.splice(x,1);
    },100);
  }

}
