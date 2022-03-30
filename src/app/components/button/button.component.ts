import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // @Input() text:string;
  // @Input() color:string;
  public text:string = "Add";
  public color:string = "green";

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
      // alert("Click Event Occur ");
      this.btnClick.emit();
  }

}
