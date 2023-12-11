import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request.headers.set('Authorization', 'bearer eyJhbGciOiJTSEEyNTYiLCJ0eXAiOiJKV1QifQ.eyJub3VuIjoidXNlclwvYXV0aGVudGljYXRlIiwicmVxdWVzdF90eXBlIjoiUE9TVCIsInJlcXVlc3RlZF9mb3IiOiJodHRwczpcL1wvdmlld2VyLmNyaXNpc2dhbWUubmwiLCJ1c2VyIjoidXNlclwvMTQiLCJuYW1lIjoiVmlld2VyIDAyIiwicmVtb3RlIjoiMTQxLjI1Mi4yMDguMTI2Iiwicm9sZXMiOlsidmlld2VyIl0sImV4cCI6MTcwMTcwNDAzNSwianRpIjoiZDM2MmVmNjA4NTc2NDE3Y2ZjZTc0MDE0MWExMTMxYTQiLCJpYXQiOjE3MDE2ODk2MzUsImlzcyI6IkNyaXNpc2dhbWVBUEkifQ.G6Ican64uDyAYzLP0-X157ehC77HtYYeRaTatqLJx5o')
    return next.handle(request);
  }
}
