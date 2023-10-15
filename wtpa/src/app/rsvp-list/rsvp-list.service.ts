import { EventEmitter } from "@angular/core";
import { Guest } from "../shared/guest.model";

export class RsvpListService {
    guestsChanged = new EventEmitter<Guest[]>();
    private guests: Guest[] = [
        new Guest('Thomas', 2, 1),
        new Guest('Gizelle', 2, 2)
    ];

    getGuests() {
        return this.guests.slice();
    }

    addGuest(guest: Guest) {
        this.guests.push(guest);
        this.guestsChanged.emit(this.guests.slice());
    }

    addGuests(guests: Guest[]) {
        this.guests.push(...guests);
        this.guestsChanged.emit(this.guests.slice());
    }
}