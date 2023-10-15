import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventStartComponent } from "./events/event-start/event-start.component";
import { EventsComponent } from "./events/events.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { EventEditComponent } from "./events/event-edit/event-edit.component";
import { RsvpListComponent } from './rsvp-list/rsvp-list.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'events', component: EventsComponent, children: [
        { path: '', component: EventStartComponent },
        { path: 'new', component: EventEditComponent },
        { path: ':id', component: EventDetailComponent },
        { path: ':id/edit', component: EventEditComponent },
    ]},
    { path: 'rsvp-list', component: RsvpListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}