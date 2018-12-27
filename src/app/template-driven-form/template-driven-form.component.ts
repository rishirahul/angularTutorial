import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  contactMethods = [
    {id: 1, name: 'email'},
    {id: 2, name: 'phone'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
