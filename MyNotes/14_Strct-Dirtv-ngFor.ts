import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
    <hr/>
    <h2 class="">Test Component</h2>
    <hr/>

    <br/>

    <div class="container">
      <h4>Structural Directives - *ngFor</h4>
      <p [style.color]="'indigo'">List of famous music directors of South India</p>
      <div *ngFor="let name of musicDirectors; index as position">
        <h3 [style.fontSize]="'20px'">{{position + 1}} : {{name}}</h3>
      </div>
    </div>

    <div class="container">
      <p [style.color]="'indigo'">Tamil Music directors = Music Directors with EVEN Index</p>
      <div *ngFor="let name of musicDirectors; even as position">
        <h3 [style.fontSize]="'20px'" [style.color]="getColor(position)">{{name}} is a Tamilian: {{position}}</h3>
      </div>
    </div>

    <div class="container">
      <p [style.color]="'indigo'">Telugu Music directors = Music Directors with ODD Index</p>
      <div *ngFor="let name of musicDirectors; odd as position">
        <h3 [style.fontSize]="'20px'" [ngStyle]="{'color': getColor(position)}">{{name}} is a Telugite: {{position}}</h3>
      </div>
    </div>

    <hr/>
  `,
    styles: [`

  `]
})
export class TestComponent implements OnInit {

    public musicDirectors = ["Ilaiyaraja", "Manisharma", "A.R.Rahaman", "DSP", "Anirudh Ravichandran", "S.S.Thaman"];

    constructor() { }

    ngOnInit(): void {
    }

    getColor(parameter: boolean) {
        if (parameter) {
            return 'green'
        }
        else {
            return 'gainsboro'
        }
    }
}
