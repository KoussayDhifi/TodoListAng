import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  public tasks:string[] = [];
  public error:string = '';

  addTask (x:any,err:any) {
    if (x.value.trim() != '' && x.value.length < 35) {
      this.tasks.push(x.value.trim());
    }else {
      err.innerText = 'This is an empty task or a too long one(35 characters max)';
      setInterval (() => {
        err.innerText = '';
      },3000);
    }
    x.value = '';
  }
  delTask (x:number) {
    setTimeout (() => {
      this.tasks.splice(x,1);
    },100);
  }

}
