import { Component,OnInit } from '@angular/core';
//import { ServiceService } from '../service.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  //constructor(public _shared : ServiceService){}
ngOnInit(): void{

  /*this._shared.getallevent().subscribe(
  res=>{
    console.log(res);
  },
  err=>{
    console.log(err);
  }
  );*/
}

}
