import { Injectable } from '@angular/core';
import { Pokemon } from './app/pokemon';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  //it's important that /pokemon is mentionedc d
  //private pokeUrl = 'api/pokemon';
  private pokeUrl = environment.apiBaseUrl
  
  constructor(
    private http: HttpClient
  ) { }

  getPoke(): Observable<Pokemon[]>{
    //return this.http.get<Pokemon[]>(this.pokeUrl)
    return this.http.get<Pokemon[]>(`${this.pokeUrl}/home`)
    //error handling with help  of rxJS catchError() operator
      .pipe(
        catchError(this.handleError<Pokemon[]>('getPoke', [] ))
      )
  }



  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  getPokeDetail(id: number): Observable<Pokemon>{
    //const url = `${this.pokeUrl}/${id}`;
    const url = `${this.pokeUrl}/home/poke-detail/${id}`;
    return this.http.get<Pokemon>(url);
  }

  addPoke(pokemon: Pokemon): Observable<Pokemon>{
    const url = `${this.pokeUrl}/home/add`;
    return this.http.post<Pokemon>(url, pokemon);
  }

  editPoke(pokemon: Pokemon): Observable<Pokemon>{
    const url = `${this.pokeUrl}/home/edit`;
    return this.http.post<Pokemon>(url, pokemon);
  }

  deletePoke(id: number): Observable<void>{
    return this.http.delete<void>(`${this.pokeUrl}/home/delete/${id}`)
  }
}
