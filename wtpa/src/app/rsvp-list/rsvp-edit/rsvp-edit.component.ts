import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Guest } from '../../shared/guest.model';

@Component({
  selector: 'app-rsvp-edit',
  templateUrl: './rsvp-edit.component.html',
  styleUrls: ['./rsvp-edit.component.css']
})
export class RsvpEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('adultInput', { static: false}) adultInputRef!: ElementRef;
  @ViewChild('childInput', { static: false}) childInputRef!: ElementRef;
  @Output() guestAdded = new EventEmitter<Guest>();

  onAddGuest() {
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAdult = this.adultInputRef.nativeElement.value;
  const ingChild = this.childInputRef.nativeElement.value;
  const newGuest = new Guest(ingName, ingAdult, ingChild);
  this.guestAdded.emit(newGuest);
  }
}
