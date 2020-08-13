import { Component, OnInit, ViewChild } from "@angular/core";
import { Setting } from "../classes/setting";
import { Activity } from "../classes/activity";
import { PlayerCharacter } from "../classes/playerCharacter";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {

    characterFieldValue: string = "Hank";
    settingFieldValue: string = "Outside";
    activityFieldValue: string = "Playing catch";
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    displayFieldValues() {
        var characterFV = "Hank";
        //this.characterFieldValue= "Henry";
        //console.log(this.activityFieldValue);
    }
}
