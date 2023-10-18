import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Guest } from '../shared/guest.model';
import { RsvpListService } from './rsvp-list.service';

@Component({
  selector: 'app-rsvp-list',
  templateUrl: './rsvp-list.component.html',
  styleUrls: ['./rsvp-list.component.css']
})
export class RsvpListComponent implements OnDestroy {
  guests: Guest[];
  private subscription: Subscription;

  constructor(private rlService: RsvpListService) { 
    this.guests = this.rlService.getGuests();
    this.subscription = this.rlService.guestsChanged
      .subscribe(
      (guests: Guest[]) => {
        this.guests = guests;
      }
    );
  }

  onEditItem(index: number) {
    this.rlService.startedEditing.next(index);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
