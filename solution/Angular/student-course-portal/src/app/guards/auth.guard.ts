import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // Hardcoded authentication check for demonstration purposes
  const isLoggedIn = true; 

  if (isLoggedIn) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};