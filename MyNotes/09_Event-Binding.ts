import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
    <hr/>
    <h2 class="">Test Component</h2>
    <hr/>

    <br/>

    <div class="container">
      <h3>Event Binding</h3>
      <button type="submit" (click)="displayText()">Display Some Text Below</button>
      <h2 [style.color]="'crimson'" id="result">{{textToDisplay}}</h2>
    </div>

    <hr/>
  `,
    styles: [`

  `]
})
export class TestComponent implements OnInit {

    public textToDisplay = "";
    constructor() { }

    ngOnInit(): void {
    }

    displayText() {
        this.textToDisplay = "Some Random Text"
    }
}
