import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  user: any = null;
  token: string = null;
  role: string = null;

  constructor(private storage: StorageService) {
    this.user = this.storage.getUser();
    this.token = this.storage.getToken();
    this.role = this.storage.getUserRole();
  }

  updateUser(user) {
    this.user = user;
  }

  updateToken(token) {
    this.token = token;
  }

  updateUserRole(role) {
    this.role = role;
  }

}
