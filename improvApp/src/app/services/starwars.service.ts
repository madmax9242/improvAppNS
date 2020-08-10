import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarWarsCharacter } from '../classes/starWarsCharacter'

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  baseUrl: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getCharacter(id: number): Observable<StarWarsCharacter> {
    console.log("Getting star wars character");
    return this.http.get<StarWarsCharacter>(this.baseUrl + 'person/' + id);
  }
}
