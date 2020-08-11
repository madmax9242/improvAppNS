import { Component, OnInit } from "@angular/core";
import { StarWarsCharacter } from "../classes/star-wars-character";
import { StarWarsService } from '../services/star-wars.service';
import { PlayerCharacter } from "../classes/playerCharacter";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    character: StarWarsCharacter;
    character2: StarWarsCharacter;
    listOfCharacters: PlayerCharacter[];


    constructor(private swService: StarWarsService) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        this.swService.getAllCharacters().subscribe(result => {
            this.listOfCharacters = result;
            console.log(this.listOfCharacters[2]);
        });
    }
}
