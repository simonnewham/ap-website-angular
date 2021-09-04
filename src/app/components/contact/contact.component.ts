import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  @Input() showBreadCrumb = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
