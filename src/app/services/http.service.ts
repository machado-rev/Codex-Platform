import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Headers } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  private initUrl(url) {
    return `${environment.backendURL}${url}`;
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.initUrl(url), data)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  postToBackend(url, data, token = null) {
    console.log(token)
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders()
      if (!token) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
      } else {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', `Bearer ${token}`);
      }
      this.http
        .post(this.initUrl(url), data, { headers: headers })
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getToBackend(url, token = null) {
    const headers: HttpHeaders = new HttpHeaders();
    if (!token) {
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
    } else {
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Authorization', `Bearer ${token}`);
    }
    return new Promise((resolve, reject) => {
      this.http
        .get(this.initUrl(url), { headers })
        .toPromise()
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  get(url) {
    return new Promise(resolve => {
      this.http
        .get(url)
        .toPromise()
        .then(response => {
          resolve(response);
        });
    });
  }
}
