export class Event {
    public title: string;
    public desc: string;
    public imageUrl: string;
    public date: string;
    public time: string;
    public location: string;
    public rsvpDate: string;
    public contactInfo: string;

    constructor(title: string, desc: string, imageUrl: string, date: string, time: string, location: string, rsvpDate: string, contactInfo: string) {
        this.title = title;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.date = date;
        this.time = time;
        this.location = location;
        this.rsvpDate = rsvpDate;
        this.contactInfo = contactInfo;
    }

}