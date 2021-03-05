import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <hr/>
    <h2 class="">Test Component</h2>
    <hr/>

    <br/>

    <div class="container">
      <h3 [style.color]="'crimson'">Style Binding</h3>

      <h4 [style.color]=color_01>Style Binding from Property Value (from class)</h4>
    </div>

    <div class="container">
      <p>Best Flight Choice of the Year is: </p>
      <h2 [style.color]="ifAirIndia ? 'crimson' : 'lightgrey' ">AIR INDIA</h2>
      <h2 [style.color]="ifIndigo ? 'indigo' : 'white' ">INDIGO</h2>
      <p [ngStyle]=BigScreenStyles>BigScreenStyles</p>
    </div>

    <hr/>
  `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {

  public color_01 = "darkslateblue";

  public ifAirIndia = false;
  public ifIndigo = true;

  public BigScreenStyles = {
    fontFamily: "Consolas",
    fontSize: "100px",
    color: "darkorange",
    backgroundColor: "#111",
    width: "75%",
    margin: "1em auto",
    padding: "0.5em",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
