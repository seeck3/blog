import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';




import { Blog } from '../models';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly base = '/api/blog';
  constructor(
    private readonly http: HttpClient,

  ) {}

  getPets(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.base);
  }

  getPet(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.base}/${id}`);
  }
  // getPet1(id: string): Observable<Blog> {
  //   return this.http.get<Blog>(`${this.base}/${id}`);
  // }
  // editPet(blog, cb) {
  //   this.http.put(this.base + blog._id, blog).subscribe(data => cb(data));
  // }
  editPet(id: number, callback): Observable<Blog> {
    return this.http.put<Blog>(`${this.base}/${id}`, callback);
  }

  createPet(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.base, blog);
  }

  deletePet(id: number): Observable<Blog> {
    return this.http.delete<Blog>(`${this.base}/${id}`);
  }

  likePet(id: number, callback): Observable<Blog> {
    return this.http.put<Blog>(`${this.base}/${id}/like`, callback);
  }
}
