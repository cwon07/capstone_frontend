import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Guest } from '../../shared/guest.model';
import { RsvpListService } from '../rsvp-list.service';

@Component({
  selector: 'app-rsvp-edit',
  templateUrl: './rsvp-edit.component.html',
  styleUrls: ['./rsvp-edit.component.css']
})
export class RsvpEditComponent implements OnDestroy{
  @ViewChild('f', { static: false }) rlForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedGuestIndex!: number;
  editedGuest!: Guest;

  constructor(private rlService: RsvpListService) {
    this.subscription = this.rlService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedGuestIndex = index;
          this.editMode = true;
          this.editedGuest = this.rlService.getGuest(index);
          this.rlForm.setValue({
            name: this.editedGuest.name,
            adult: this.editedGuest.adult,
            children: this.editedGuest.children
          })
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newGuest = new Guest(value.name, value.adult, value.children);
    if (this.editMode) {
      this.rlService.updateGuest(this.editedGuestIndex, newGuest);
    } else {
      this.rlService.addGuest(newGuest);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.rlForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.rlService.deleteGuest(this.editedGuestIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
