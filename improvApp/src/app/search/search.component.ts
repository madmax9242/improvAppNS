import { Component, OnInit } from "@angular/core";
import { StarWarsCharacter } from "../classes/star-wars-character";
import { ScenarioService } from '../services/scenario.service';
import { PlayerCharacter } from "../classes/playerCharacter";
import { Activity } from "../classes/activity";
import { Setting } from "../classes/setting";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    listOfActivities: Activity[];
    listOfSettings: Setting[];
    listOfCharacters: PlayerCharacter[];


    constructor(private scenarioService: ScenarioService) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.scenarioService.getAllCharacters().subscribe(result => {
            this.listOfCharacters = result;
            console.log(this.listOfCharacters[2]);
            console.log(this.listOfCharacters[5]);
        });

        this.scenarioService.getAllActivities().subscribe(result => {
            this.listOfActivities = result;
            console.log(this.listOfActivities[1]);
        });

        this.scenarioService.getAllSettings().subscribe(result => {
            this.listOfSettings = result;
            console.log(this.listOfSettings[0]);
        })

        
    }
}
