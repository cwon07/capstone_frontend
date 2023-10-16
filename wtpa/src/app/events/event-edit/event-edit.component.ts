import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { EventService } from '../event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent {
  id!: number;
  editMode = false;
  eventForm: FormGroup;

  get eventControls() {
    return (this.eventForm.get('guests') as FormArray).controls
  }
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router) {
      this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
    }

  onSubmit() {
    if (this.editMode) {
      this.eventService.updateEvent(this.id, this.eventForm.value);
    } else {
      this.eventService.addEvent(this.eventForm.value);
    }
    this.onCancel();
  }

  onAddGuest() {
    (<FormArray>this.eventForm.get('guests')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        adult: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        children: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteGuest(index: number) {
    (<FormArray>this.eventForm.get('guests')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let eventTitle = '';
    let eventImageUrl = '';
    let eventDesc = '';
    let eventDate = '';
    let eventTime = '';
    let eventRsvpDate = '';
    let eventLocation = '';
    let eventContactInfo = '';
    let eventGuests = new FormArray([]);

    if (this.editMode) {
      const event = this.eventService.getEvent(this.id);
      eventTitle = event.title;
      eventImageUrl = event.imageUrl;
      eventDesc = event.desc;
      eventDate = event.date;
      eventTime = event.time;
      eventRsvpDate = event.rsvpDate;
      eventLocation = event.location;
      eventContactInfo = event.contactInfo;
      if(event['guests']) {
        for (let guest of event.guests) {
          eventGuests.push(
            new FormGroup({
              'name': new FormControl(guest.name, Validators.required),
              'adult': new FormControl(guest.adult, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'children': new FormControl(guest.children, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.eventForm = new FormGroup({
      'title': new FormControl(eventTitle, Validators.required),
      'imageUrl': new FormControl(eventImageUrl, Validators.required), 
      'desc': new FormControl(eventDesc, Validators.required),
      'date': new FormControl(eventDate, Validators.required),
      'time': new FormControl(eventTime, Validators.required),
      'location': new FormControl(eventLocation, Validators.required),
      'contactInfo': new FormControl(eventContactInfo, Validators.required),
      'rsvpDate': new FormControl(eventRsvpDate, Validators.required),
      'guests': eventGuests
    });
  }
}