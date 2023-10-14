import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { RsvpListComponent } from './rsvp-list/rsvp-list.component';
import { RsvpEditComponent } from './rsvp-list/rsvp-edit/rsvp-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    EventDetailComponent,
    EventEditComponent,
    EventListComponent,
    EventItemComponent,
    EventStartComponent,
    RsvpListComponent,
    RsvpEditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
