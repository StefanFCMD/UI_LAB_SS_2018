import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ServiceRequest",
    moduleId: module.id,
    templateUrl: "./servicerequest.component.html"
})
export class ServiceRequestComponent implements OnInit {

    //appointments: string[] = [ 'teamJAG', 'Pappnase', 'Die Lappenhaften', 'Dungeonkeepers', 'Aviator', '3null3', 'SexyMachine4001', 'Anime Gurl 96', 'Die Ritter der Zärtlichkeit' ];

    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
