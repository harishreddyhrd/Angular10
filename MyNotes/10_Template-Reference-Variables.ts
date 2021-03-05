import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
    <hr/>
    <h2 class="">Test Component</h2>
    <hr/>

    <br/>

    <div class="container">
      <h3>Template Reference Variable</h3>
      <input type="text" #inputText><br/><br/>
      <button type="submit" (click)="displayGivenInput(inputText.value)">Display the above given Input right Below</button>
      <!-- <button type="submit" (click)="displayGivenInput(inputText)">Display the above given Input right Below</button> -->
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

    displayGivenInput(argumentPassed: any) {
        console.log(argumentPassed);
        this.textToDisplay = argumentPassed;
    }
}
