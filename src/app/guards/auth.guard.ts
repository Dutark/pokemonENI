import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuth()) {
    return true;
  }
  router.navigate(['/login'], { queryParams: { message: 'Vous devez être connecté' } });
  return false;
};
