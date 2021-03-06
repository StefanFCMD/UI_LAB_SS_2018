import { Injectable } from "@angular/core";

import { Appointment } from "~/models/appointment";
import { Contact } from "~/models/contact";
import { Customer } from "~/models/customer";
import { Country, Location } from "~/models/location";
import { Note, NoteStatus } from "~/models/note";
import { Site } from "~/models/site";
import { SparePart } from "~/models/spare-part";
import {Order} from "~/models/order";

const location = new Location();
location.id = "location01";
location.street = "Moltkestraße";
location.number = "30";
location.zipCode = 76133;
location.city = "Karlsruhe";
location.country = Country.DE;
location.latitude = 49.015666;
location.longitude = 8.389606;

const site = new Site();
site.id = "site01";
site.name = "HSKA Main Campus";
site.location = location;

const contact = new Contact();
contact.id = "contact01";
contact.firstName = "John";
contact.lastName = "Doe";
contact.position = "Site Manager";
contact.email = "john.doe@company.com";
contact.phone = "+49 1234 56 78 90 12";

@Injectable()
export class DummyService {

    getAppointments(): Array<Appointment> {

        const appointment1 = new Appointment();
        appointment1.id = "appointment01";
        appointment1.description = "Repair smart coffee machine @HsKA";
        appointment1.date = new Date("2018-05-25T08:30:00");
        appointment1.site = site;

        const appointment2 = new Appointment();
        appointment2.id = "appointment02";
        appointment2.description = "Repair smart coffee machine @HsKA again";
        appointment2.date = new Date("2018-06-15T10:30:00");
        appointment2.site = site;

        const appointment3 = new Appointment();
        appointment3.id = "appointment03";
        appointment3.description = "Throw smart coffee machine in the trash @HsKA";
        appointment3.date = new Date("2018-07-20T16:00:00");
        appointment3.site = site;
        const appointment4 = new Appointment();
        appointment4.id = "appointment03";
        appointment4.description = "Throw smart coffee machine in the trash @HsKA";
        appointment4.date = new Date("2018-07-20T16:00:00");
        appointment4.site = site;
        const appointment5 = new Appointment();
        appointment5.id = "appointment03";
        appointment5.description = "Throw smart coffee machine in the trash @HsKA";
        appointment5.date = new Date("2018-07-20T16:00:00");
        appointment5.site = site;
        const appointment6 = new Appointment();
        appointment6.id = "appointment03";
        appointment6.description = "Throw smart coffee machine in the trash @HsKA";
        appointment6.date = new Date("2018-07-20T16:00:00");
        appointment6.site = site;
        const appointment7 = new Appointment();
        appointment7.id = "appointment03";
        appointment7.description = "Throw smart coffee machine in the trash @HsKA";
        appointment7.date = new Date("2018-07-20T16:00:00");
        appointment7.site = site;
        const appointment8 = new Appointment();
        appointment8.id = "appointment03";
        appointment8.description = "Throw smart coffee machine in the trash @HsKA";
        appointment8.date = new Date("2018-07-20T16:00:00");
        appointment8.site = site;
        const appointment9 = new Appointment();
        appointment9.id = "appointment03";
        appointment9.description = "Throw smart coffee machine in the trash @HsKA";
        appointment9.date = new Date("2018-07-20T16:00:00");
        appointment9.site = site;
        const appointment10 = new Appointment();
        appointment10.id = "appointment03";
        appointment10.description = "Throw smart coffee machine in the trash @HsKA";
        appointment10.date = new Date("2018-07-20T16:00:00");
        appointment10.site = site;

        const appointments = [];
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);
        appointments.push(appointment7);
        appointments.push(appointment8);
        appointments.push(appointment9);
        appointments.push(appointment10);

        return appointments;
    }

    getCustomers(): Array<Customer> {

        const customers = [];

        const customer1 = new Customer();
        customer1.id = "customer01";
        customer1.name = "The Company";
        customer1.contact = contact;
        customer1.sites = [ site ];
        customers.push(customer1);

        const customer2 = new Customer();
        customer2.id = "customer02";
        customer2.name = "The Other Company";
        customer2.contact = contact;
        customer2.sites = [ site ];
        customers.push(customer2);

        const customer3 = new Customer();
        customer3.id = "customer03";
        customer3.name = "Yet Another Company";
        customer3.contact = contact;
        customer3.sites = [ site ];
        customers.push(customer3);

        return customers;
    }

    getNotes(): Array<Note> {

        const notes = [];

        const note1 = new Note();
        note1.id = "note01";
        note1.text = "";
        note1.status = NoteStatus.Note;
        notes.push(note1);

        const note2 = new Note();
        note2.id = "note02";
        note2.text = "Buy more PZ 4x35 screws ";
        note2.status = NoteStatus.ToDo;
        notes.push(note2);

        const note3 = new Note();
        note3.id = "note03";
        note3.text = "";
        note3.status = NoteStatus.Note;
        notes.push(note3);

        const note4 = new Note();
        note4.id = "note04";
        note4.text = "Bring cordless lithium-ion screwdriver";
        note4.status = NoteStatus.Done;
        notes.push(note4);

        return notes;
    }

    getSpareParts(): Array<SparePart> {

        const spareParts = [];

        const part1 = new SparePart();
        part1.id = "part01";
        part1.partNumber = "ASIN_B01IH803FI";
        part1.description = "Screw Assortment Kit";
        part1.amount = 2;
        spareParts.push(part1);

        const part2 = new SparePart();
        part2.id = "part02";
        part2.partNumber = "ASIN_B00MG2PETW";
        part2.description = "Temperature Sensor";
        part2.amount = 5;
        spareParts.push(part2);

        const part3 = new SparePart();
        part3.id = "part03";
        part3.partNumber = "ASIN_B073F472JL";
        part3.description = "Humidity Sensor Module";
        part3.amount = 2;
        spareParts.push(part3);

        const part4 = new SparePart();
        part4.id = "part04";
        part4.partNumber = "ASIN_B00QZLV03O";
        part4.description = "Precision Repair Tool Ki";
        part4.amount = 1;
        spareParts.push(part4);

        const part5 = new SparePart();
        part5.id = "part05";
        part5.partNumber = "ASIN_B00JJTPWII";
        part5.description = "Wire 50 ft Solid Copper Cable";
        part5.amount = 2;
        spareParts.push(part5);

        return spareParts;
    }

    getOrders(): Array<Order> {

        const orderedParts = [];

        const part1 = new Order();
        part1.id = "order1";
        part1.partNumber = "ASIN_B01IH803FI";
        part1.description = "Screw Assortment Kit";
        part1.amount = 2;
        part1.status = "ordered";
        orderedParts.push(part1);

        const part2 = new Order();
        part2.id = "order2";
        part2.partNumber = "ASIN_B00MG2PETW";
        part2.description = "Temperature Sensor";
        part2.amount = 5;
        part2.status = "ready";
        orderedParts.push(part2);

        return orderedParts;
    }
}
