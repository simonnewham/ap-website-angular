import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html'
})
export class FaqItemComponent implements OnInit {
  @Input() question: string;
  @Input() answer: string;

  opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.opened = !this.opened;
  }

}
