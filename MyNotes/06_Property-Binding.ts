import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <hr/>
    <h2>Test Component</h2>
    <hr/>

    <br/>

    <input [id]="inputBoxID_01" type="text" value="Default Text" class="inputBox">
    <input id={{inputBoxID_02}} type="text" value="Default Text" class="inputBox">
    <button [disabled]=isSubmitDisabled type="submit" class="btn">Submit</button>
    <button disabled={{isDeleteDisabled}} type="submit" class="btn">Delete</button>
    <button bind-disabled=isModifyDisabled type="submit" class="btn">Modify</button>
    <br/>
    <p><strong><em>Open Console and Check difference b/w "DOM" and "ATTRIBUTE" Values</em></strong></p>
    <p>$0.getAttribute('value') = <strong>"Default Text"</strong></p>
    <p>$0.value = <strong>"Input Text"</strong></p>

    <h2>Attribute is set by HTML</h2>
    <h2>Property is set by DOM</h2>
    <h2>Hence, Property Binding (but not Attribute Binding)</h2>
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

      .inputBox, .btn {
        text-align: center;
        margin: 0.5em 28em;
        padding: 0.1em;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  `]
})
export class TestComponent implements OnInit {

  public inputBoxID_01 = "input-box-01";
  public inputBoxID_02 = "input-box-02";
  public isSubmitDisabled = false;
  public isDeleteDisabled = false;
  public isModifyDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
