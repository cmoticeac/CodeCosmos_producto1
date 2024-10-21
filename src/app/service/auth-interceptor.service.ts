import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clonar la solicitud para agregar encabezados
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer TOKEN_DE_AUTENTICACIÓN')
    });

    // Pasar la solicitud clonada al siguiente manejador
    return next.handle(authReq);
  }
}
