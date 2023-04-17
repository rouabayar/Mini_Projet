import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/add-event/add-event.component';
import { DeleteEventComponent } from './components/delete-event/delete-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { EventButtonsComponent } from './components/event-buttons/event-buttons.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { ClubsComponent } from './components/clubs/clubs.component';
const routes: Routes = [

// { path: 'add' , component: AddEventComponent},
// { path: 'delete' , component: DeleteEventComponent},
// { path: 'update' , component: UpdateEventComponent},
// { path: '' , component: EventButtonsComponent},
// { path: "buttons" , component: EventButtonsComponent},
// {path:'home',component:HomeComponent },
// //{ path: "**" , redirectTo:"home" , pathMatch:"full"},
// {path:'form',component : FormComponent},
// //{path:'',component:HomeComponent },
// {path:'events',component:EventsComponent},
// {path:'',component:ClubsComponent},
// {path:'clubs',component:ClubsComponent}

  {path:'form',component : FormComponent},
  {path:'',component:HomeComponent },
  {path:'events',component:EventsComponent},
  {path:'',component:ClubsComponent},
  {path:'clubs',component:ClubsComponent},
  { path:"buttons" , component: EventButtonsComponent},
  { path: 'add' , component: AddEventComponent},
  { path: 'delete' , component: DeleteEventComponent},
  { path: 'update' , component: UpdateEventComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
