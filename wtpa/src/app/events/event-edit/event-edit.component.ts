import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent {
  id!: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {this.id = +params['id'];this.editMode = params['id'] != null;}
    )
  }
}
