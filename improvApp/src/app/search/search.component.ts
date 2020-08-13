import { Component, OnInit } from "@angular/core";
import { StarWarsCharacter } from "../classes/star-wars-character";
import { ScenarioService } from '../services/scenario.service';
import { PlayerCharacter } from "../classes/playerCharacter";
import { Activity } from "../classes/activity";
import { Setting } from "../classes/setting";
import { HtmlView } from "tns-core-modules/ui/html-view";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    listOfActivities: Activity[];
    listOfSettings: Setting[];
    listOfCharacters: PlayerCharacter[];
    character1: PlayerCharacter;
    character2: PlayerCharacter;
    setting: Setting;
    activity: Activity;


    constructor(private scenarioService: ScenarioService) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.generateScenario();

        
    }

    generateScenario() {
        //this.scenarioService.loadData();
        this.scenarioService.getAllCharacters().subscribe(character => {
            this.listOfCharacters = character;
            this.character1 = this.listOfCharacters[this.getRandomNumberBetween(0, (this.listOfCharacters.length - 1))];
            this.character2 = this.listOfCharacters[this.getRandomNumberBetween(0, (this.listOfCharacters.length - 1))];
            //console.log("Character 1- " + this.character1.name + "  Character 2- " + this.character2.name);
        });

        this.scenarioService.getAllActivities().subscribe(activities => {
            this.listOfActivities = activities;
            this.activity = this.listOfActivities[this.getRandomNumberBetween(0, (this.listOfActivities.length - 1))];
            
        });

        this.scenarioService.getAllSettings().subscribe(settings => {
            this.listOfSettings = settings;
            this.setting = this.listOfSettings[this.getRandomNumberBetween(0, (this.listOfSettings.length - 1))];
            
        });
        
    }

    getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    
}
