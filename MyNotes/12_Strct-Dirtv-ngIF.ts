import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
    <hr/>
    <h2 class="">Test Component</h2>
    <hr/>

    <br/>

    <div class="container">
      <h5 [style.color]="'crimson'">Structural Directives - *ngIf</h5>
      <h5 *ngIf="travelByBus; else travelByFlight">If you travel by Bus, then choose <h2 [style.color]="'crimson'">{{BusTicketingPlatform}}</h2> </h5>
      <ng-template #travelByFlight>
        <h5>If you travel by Flight, then choose <h2 [style.color]="'indigo'">{{FlightTicketingPlatform}}</h2> </h5>
      </ng-template>
    </div>

    <div class="container">
      <p>The better way</p>
      <h5 [style.color]="'green'">Structural Directives - *ngIf</h5>
      <h5 *ngIf="travel; then travelByFlight; else stayHomeStaySafe"></h5>
      <ng-template #travelByFlight>
        <h5>If you travel choose a flight <h2 [style.color]="'indigo'">{{FlightTicketingPlatform}}</h2> </h5>
      </ng-template>
      <ng-template #stayHomeStaySafe>
        <h5>If you don't travel <h2 [style.color]="'green'">StayHome-StaySafe</h2> </h5>
      </ng-template>
    </div>

    <hr/>
  `,
    styles: [`

  `]
})
export class TestComponent implements OnInit {

    public travel = false;
    public travelByBus = false;
    public BusTicketingPlatform = "www.redbus.in"
    public FlightTicketingPlatform = "www.goindigo.in"
    constructor() { }

    ngOnInit(): void {
    }

}
