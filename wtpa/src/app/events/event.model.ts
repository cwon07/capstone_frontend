import { Guest } from '../shared/guest.model'

export class Event {
    public title: string;
    public desc: string;
    public imageUrl: string;
    public date: string;
    public time: string;
    public location: string;
    public rsvpDate: string;
    public contactInfo: string;
    public guests: Guest[];

    constructor(title: string, desc: string, imageUrl: string, date: string, time: string, location: string, rsvpDate: string, contactInfo: string, guests: Guest[]) {
        this.title = title;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.date = date;
        this.time = time;
        this.location = location;
        this.rsvpDate = rsvpDate;
        this.contactInfo = contactInfo;
        this.guests = guests;
    }
}