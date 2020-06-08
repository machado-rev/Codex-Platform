import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { ShareService } from '../services/share.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

    constructor(private share:ShareService){}

    intercept(req: HttpRequest<any>, next:HttpHandler){
        const authToken =this.share.token

        const token = req.clone({
            headers: req.headers.set("Authorization", "Bearer "+ authToken)
        })

            return next.handle(token)

    }
}
