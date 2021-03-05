import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
    <hr/>
    <h2 class="">Test Component</h2>
    <hr/>

    <br/>

    <div class="container">
      <h5 [style.color]="'crimson'">Two-way Data Binding (Event Binding + Property Binding Version)</h5>

      <input type="text" #inputText (keyup)="displayGivenInput(inputText.value)"><br/><br/>
      <button type="submit">Submit</button>
      <h2 [style.color]="'crimson'">{{givenInput}}</h2>
    </div>

    <div class="container">
      <h5 [style.color]="'indigo'">Two-way Data Binding (ngModel Version)</h5>
      <p>Import <b>@angular/forms</b> for <b>ngModel</b> to Work</p>

      <input type="text" [(ngModel)]=textToDisplay ><br/>
      <!-- <button type="submit">Submit</button><br/> -->
      <h2 [style.color]="'indigo'">{{textToDisplay}}</h2>
    </div>

    <hr/>
  `,
    styles: [`

  `]
})
export class TestComponent implements OnInit {

    public givenInput = "";
    public textToDisplay = "";
    constructor() { }

    ngOnInit(): void {
    }

    displayGivenInput(argumentPassed: any) {
        this.givenInput = argumentPassed
    }
}
