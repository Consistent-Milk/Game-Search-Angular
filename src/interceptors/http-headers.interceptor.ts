import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': 'fceca2f4f0mshd345cf0259e754fp1e2652jsn4a3d7b4121e6'
            },
            setParams: {
                key: 'bf38e67aed4f4a90ae411789dcae0647'
            }
        });
        return next.handle(req);
    }
}