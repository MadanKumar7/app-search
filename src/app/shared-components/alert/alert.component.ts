import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

	@Input() title:string = '';
	@Input() message:string = '';
	@Input() primaryButton:string = '';
	@Input() secondaryButton:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
