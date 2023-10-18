import { Guest } from "../shared/guest.model";
import { Subject } from "rxjs";

export class RsvpListService {
    guestsChanged = new Subject<Guest[]>();
    startedEditing = new Subject<number>();
    private guests: Guest[] = [
        new Guest('Thomas', 2, 1),
        new Guest('Jo', 2, 2)
    ];

    getGuests() {
        return this.guests.slice();
    }

    getGuest(index: number) {
        return this.guests[index];
    }

    addGuest(guest: Guest) {
        this.guests.push(guest);
        this.guestsChanged.next(this.guests.slice());
    }

    addGuests(guests: Guest[]) {
        this.guests.push(...guests);
        this.guestsChanged.next(this.guests.slice());
    }

    updateGuest(index: number, newGuest: Guest) {
        this.guests[index] = newGuest;
        this.guestsChanged.next(this.guests.slice());
    }

    deleteGuest(index: number) {
        this.guests.splice(index, 1);
        this.guestsChanged.next(this.guests.slice());
    }
}