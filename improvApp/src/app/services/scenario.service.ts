import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerCharacter } from '../classes/playercharacter';
import { Setting } from '../classes/setting';
import { Activity } from '../classes/activity';
import { NativeScriptHttpClientModule } from "@nativescript/angular/http-client";

@Injectable({
    providedIn: 'root'
})
export class ScenarioService {

    //baseUrl: string = 'http://localhost:8989/';
    baseUrl: string = 'https://improv-app-9242.herokuapp.com/';


    constructor(private http: HttpClient) { }

    getAllCharacters(): Observable<PlayerCharacter[]> {
      console.log("Getting characters");
      return this.http.get<PlayerCharacter[]>(this.baseUrl + "character/all");
    }

    getAllSettings(): Observable<Setting[]> {
        return this.http.get<Setting[]>(this.baseUrl + "/setting/all");
    }

    getAllActivities(): Observable<Activity[]> {
        return this.http.get<Activity[]>(this.baseUrl + "setting/all");
    }

    getCharacterById(id: number): Observable<PlayerCharacter> {
        return this.http.get<PlayerCharacter>(this.baseUrl + 'character/' + id);
    }

    addNewCharacter(character: PlayerCharacter): Observable<PlayerCharacter> {
        return this.http.post<PlayerCharacter>(this.baseUrl + 'character/', character)
    }

    deleteCharacterByName(name: string) {
        this.http.delete<PlayerCharacter>(this.baseUrl + "character/" + name);
    }



}
