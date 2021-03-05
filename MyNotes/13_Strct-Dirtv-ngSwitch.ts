import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
    <hr/>
    <h2 class="">Test Component</h2>
    <hr/>

    <br/>

    <div class="container">
      <h4>Structural Directives - *ngSwitch</h4>
      <p>Give a Day number below</p>
      <input type="number" min="1" max="7" [(ngModel)]=dayNumber>
      <!-- <input type="number" min="1" max="7" #numberInput (change)="setDayNumber(numberInput.value)"> -->
      <div [ngSwitch]=dayNumber>
        <h2 *ngSwitchCase="'1'">MonDay</h2>
        <h2 *ngSwitchCase="'2'">TuesDay</h2>
        <h2 *ngSwitchCase="'3'">WednesDay</h2>
        <h2 *ngSwitchCase="'4'">ThursDay</h2>
        <h2 *ngSwitchCase="'5'">FriDay</h2>
        <h2 *ngSwitchCase="'6'">SaturDay</h2>
        <h2 *ngSwitchCase="'7'">SunDay</h2>
        <h2 *ngSwitchDefault>Invalid Day Number</h2>
      </div>
    </div>

    <hr/>
  `,
    styles: [`

  `]
})
export class TestComponent implements OnInit {

    public dayNumber = null;
    constructor() { }

    ngOnInit(): void {
    }
    //Comment Out this when using  ngModel
    setDayNumber(parameter: any) {
        this.dayNumber = parameter;
    }
}
