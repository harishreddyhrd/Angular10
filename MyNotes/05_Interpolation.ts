import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <hr/>
    <h2>Test Component</h2>
    <hr/>
    
    <br/>
  
    <h2>Interpolation</h2>
    <p><strong>1. It's a One-Way Data Binding Technique</strong></p>
    <p><strong>2. Binding Expression = Double Braces</strong></p>
    <p><strong>3. Interpolation = Way of Binding data from CLASS to TEMPLATE</strong></p>

    <br/>

    <p>Good Day Mr. <strong>{{name}}</strong>!</p>
    <p><em>{{"Interpolation page welcomes you " + name + "!"}}</em></p>
    <p>Your name has <strong>{{name.length}}</strong> Characters!</p>
    <p>Your Full name is <strong>{{name.concat(" ", "Reddy", " ", "Dappili").toUpperCase()}}</strong>!</p>
    <p>{{displayUserName()}}</p>

    <br/>

    <h2>Things You can't do with Interpolation</h2>
    <p>Bindings (the double braces) can't contain variable declarations like x=7</p>
    <p><em>You are at <strong>{{pageURL}}</strong>. You cant directly access <strong>window.location.href</strong> inside the (Bindings) double braces</em></p>

    <br/>
    
    <hr/>
  `,
  styles: [`
  
    h2 {
      text-align: center;
      margin: 0.5em 10em;
      padding: 0.1em;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 34px;
      color: #222222;
    }

    p {
      text-align: center;
      margin: 0.5em 10em;
      padding: 0.1em;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 22px;
      color: #222222;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Harish"
  public pageURL = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  displayUserName() {
    return "Thank You " + this.name + "! Have a Nice Day";
  }
}
