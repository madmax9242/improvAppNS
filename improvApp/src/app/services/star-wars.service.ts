import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarsCharacter } from '../classes/star-wars-character';
import { PlayerCharacter } from '../classes/playerCharacter';

import { Observable } from 'rxjs';
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";


@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  baseUrl = "https://improv-app-9242.herokuapp.com/character/";

  constructor(private http: HttpClient) { }

  getCharacterById(id: number): Observable<StarWarsCharacter> {
    return this.http.get<StarWarsCharacter>(this.baseUrl + id);
  }

  getAllCharacters(): Observable<PlayerCharacter[]> {
    return this.http.get<PlayerCharacter[]>(this.baseUrl + "all");
  }

  getCharacterWithJSON() {
    getJSON("https://improv-app-9242.herokuapp.com/character/2").then((r: any) => {
      //console.log("Response: " + r);

      }, (e) => {
        //console.log("Error: " + e)
        });
  }



}
