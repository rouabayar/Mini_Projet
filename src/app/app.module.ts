import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventButtonsComponent } from './components/event-buttons/event-buttons.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { DeleteEventComponent } from './components/delete-event/delete-event.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    EventButtonsComponent,
    AddEventComponent,
    UpdateEventComponent,
    DeleteEventComponent,
    ClubsComponent,
    EventsComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
