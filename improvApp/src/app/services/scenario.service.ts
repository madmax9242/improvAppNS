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

  loadData(): any {
    this.http.get(this.baseUrl + "character/data");
    this.http.get(this.baseUrl + "setting/data");
    this.http.get(this.baseUrl + "activity/data");
  }

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

  // postNewActivity(activity: Activity): Observable<Activity> {
  //   return this.http.post<Activity>(this.baseUrl + "activity", activity);
  // }

  // postNewCharacter(character: PlayerCharacter): Observable<PlayerCharacter> {
  //   return this.http.post<PlayerCharacter>(this.baseUrl + "character" , character);
  // }

  // postNewSetting(setting: Setting): Observable<Setting> {
  //   return this.http.post<Setting>(this.baseUrl + "character" , setting);
  // }



}
