import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ioproperty',
  templateUrl: './ioproperty.component.html',
  styleUrls: ['./ioproperty.component.scss']
})
export class IopropertyComponent implements OnInit {
  @Input('input-property') currentState: string;
  currentBtnState = '';
  constructor() { }

  ngOnInit() {
    this.currentBtnState = this.currentState;
  }

  toggleState() {
    if (this.currentBtnState === 'even clicks') {
      this.currentBtnState = 'odd clicks';
    } else {
      this.currentBtnState = 'even clicks';
    }
  }
}
