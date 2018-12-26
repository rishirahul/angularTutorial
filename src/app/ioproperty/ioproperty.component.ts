import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ioproperty',
  templateUrl: './ioproperty.component.html',
  styleUrls: ['./ioproperty.component.scss']
})
export class IopropertyComponent implements OnInit {
  @Input('input-property') currentState: string;
  @Output('output-property') buttonClicked = new EventEmitter;
  currentBtnState = '';
  constructor() { }

  ngOnInit() {
    this.currentBtnState = this.currentState;
  }

  toggleState() {
    this.buttonClicked.emit({buttonString : this.currentBtnState});
    if (this.currentBtnState === 'even clicks') {
      this.currentBtnState = 'odd clicks';
    } else {
      this.currentBtnState = 'even clicks';
    }
  }
}

export interface IoOutputEventArgs {
  buttonString: string;
}
