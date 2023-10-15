import { Component, ElementRef, ViewChild } from '@angular/core';

import { Guest } from '../../shared/guest.model';
import { RsvpListService } from '../rsvp-list.service';

@Component({
  selector: 'app-rsvp-edit',
  templateUrl: './rsvp-edit.component.html',
  styleUrls: ['./rsvp-edit.component.css']
})
export class RsvpEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('adultInput', { static: false}) adultInputRef!: ElementRef;
  @ViewChild('childInput', { static: false}) childInputRef!: ElementRef;

  constructor(private rlService: RsvpListService) {}

  onAddGuest() {
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAdult = this.adultInputRef.nativeElement.value;
  const ingChild = this.childInputRef.nativeElement.value;
  const newGuest = new Guest(ingName, ingAdult, ingChild);
  this.rlService.addGuest(newGuest);
  }
}
