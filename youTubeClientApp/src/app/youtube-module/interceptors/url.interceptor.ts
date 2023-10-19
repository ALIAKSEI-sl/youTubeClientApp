import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const keyApi = 'AIzaSyDwqA1y_itjB57RFEv8gk-W6xgjs5uSmBM';
    const url = 'https://www.googleapis.com/youtube/v3';

    return next.handle(
      req.clone({
        url: `${url}/${req.url}`,
        setParams: {
          key: keyApi,
        },
      })
    );
  }
}
