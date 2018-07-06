import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public received_msg = "";

  public child_msg = " Hello Parent Component ";

  @Output() public myevent = new EventEmitter(); 
  
  constructor() { }

  public SendMsg()
  {
      this.myevent.emit(this.child_msg);
  }
  
  ngOnInit() {
  }

}
