import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarsCharacter } from '../classes/star-wars-character';
import { PlayerCharacter } from '../classes/playerCharacter';

import { Observable } from 'rxjs';
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
import { Setting } from '../classes/setting';
import { Activity } from '../classes/activity';


@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  baseUrl = "https://improv-app-9242.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getCharacterById(id: number): Observable<PlayerCharacter> {
    return this.http.get<PlayerCharacter>(this.baseUrl + id);
  }

  getAllCharacters(): Observable<PlayerCharacter[]> {
    return this.http.get<PlayerCharacter[]>(this.baseUrl + "character/all");
  }

  getAllSettings(): Observable<Setting[]> {
    return this.http.get<Setting[]>(this.baseUrl + "setting/all");
  }

  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.baseUrl + "activity/all");
  }

  getCharacterWithJSON() {
    getJSON("https://improv-app-9242.herokuapp.com/character/2").then((r: any) => {
      //console.log("Response: " + r);

      }, (e) => {
        //console.log("Error: " + e)
        });
  }



}
