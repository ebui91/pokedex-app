import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  // GET Pokemon request
  getPokemon() {
    let response = this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    console.log('*** GET Pokemon response: ', response);
    return response;
  }
}
