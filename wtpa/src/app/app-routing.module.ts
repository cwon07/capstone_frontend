import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventStartComponent } from "./events/event-start/event-start.component";
import { EventsComponent } from "./events/events.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { EventEditComponent } from "./events/event-edit/event-edit.component";
import { RsvpListComponent } from './rsvp-list/rsvp-list.component';
import { EventsResolverService } from './events/events-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';


const appRoutes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'events', 
        component: EventsComponent, 
        canActivate: [AuthGuard],
        children: [
            { path: '', component: EventStartComponent },
            { path: 'new', component: EventEditComponent },
            { path: ':id', component: EventDetailComponent, resolve: [EventsResolverService] },
            { path: ':id/edit', component: EventEditComponent, resolve: [EventsResolverService] },
        ]
    },
    { path: 'rsvp', component: RsvpListComponent },
    { path: 'account', component: AuthComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}