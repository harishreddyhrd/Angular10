import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <hr/>
    <h2 class="">Test Component</h2>
    <hr/>

    <br/>

    <div class="container">
    <h2>{{GetMsgFromParent}}</h2>
    <button type="submit" (click)="sendMsgToParent()">Get Message from Child (test) Component</button>
    </div>

    <hr/>
  `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {

  // @Input() public MsgFromParent: any;
  @Input('MsgFromParent') public GetMsgFromParent: any;

  @Output() MsgFromChild = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMsgToParent() {
    this.MsgFromChild.emit("This Msg is from Child: TEST Component")
  }
}
