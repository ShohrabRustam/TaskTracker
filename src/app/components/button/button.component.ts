import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // @Input() text:string;
  // @input() color:string;
  public text:string = "Add";
  public color:string = "green";

  constructor() { }

  ngOnInit(): void {
  }

}
