import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <hr/>
    <h2 class="">Test Component</h2>
    <hr/>

    <br/>

    <div class="container">

      <h3 [class]=color03>Class Binding</h3>

      <h2 [class.crimson]=ifAirIndia>Air India</h2>
      <h2 [class.indigo]=ifIndigo>Indigo Airlines</h2>

      <p [ngClass]=BigScreenClasses>BigScreen</p>
    </div>

   
    <hr/>
  `,
  styles: [`

    .crimson { color: crimson }
    .indigo { color: indigo }
    .purple { color: purple }


    
    .clearFontFamily {
      font-family: "Consolas";
    }

    .bigFontSize {
      font-size: 100px;
    }

    .intensiveColor {
      color: darkorange;
    }

    .darkBackground {
      background-color: #111;
      width: 75%;
      margin: 1em auto;
      padding: 0.5em;
    }

  `]
})
export class TestComponent implements OnInit {

  public color01 = "crimson";
  public color02 = "indigo";
  public color03 = "purple";

  public ifAirIndia = true;
  public ifIndigo = true;

  public ifBigScreen = true;

  public BigScreenClasses = {
    "clearFontFamily" : this.ifBigScreen,
    "bigFontSize": this.ifBigScreen,
    "intensiveColor": this.ifBigScreen,
    "darkBackground": this.ifBigScreen
  }

  constructor() { }

  ngOnInit(): void {
  }

}
