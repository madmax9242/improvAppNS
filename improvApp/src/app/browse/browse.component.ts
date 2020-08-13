import { Component, OnInit, ViewChild } from "@angular/core";
import { ScenarioService } from '../services/scenario.service'
import { PlayerCharacter } from "../classes/playerCharacter";
import { Setting } from "../classes/setting";
import { Activity } from "../classes/activity";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {

    cFV: PlayerCharacter = new PlayerCharacter();
    sFV: Setting = new Setting();
    aFV: Activity = new Activity;
    characterFieldValue: string;
    settingFieldValue: string;
    activityFieldValue: string;
    constructor(private scenarioService: ScenarioService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        
    }

    displayFieldValues() {
        if (this.characterFieldValue) {
            this.cFV.name = this.characterFieldValue;
            this.scenarioService.postNewCharacter(this.cFV).subscribe(result => {
                console.log("Sent the character");
            });
        }
        if (this.settingFieldValue) {
            this.sFV.name = this.settingFieldValue;
            this.scenarioService.postNewSetting(this.sFV).subscribe(result => {
                console.log("Sent the setting");
            });
        }
        if (this.activityFieldValue) {
            this.aFV.name = this.activityFieldValue;
            this.scenarioService.postNewActivity(this.aFV).subscribe(result => {
                console.log("Sent the activity");
            });
        }

        

        
        
    }
}
