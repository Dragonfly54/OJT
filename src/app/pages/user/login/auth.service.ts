import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'remember-me-token';

  authenticate(credentials: { email: string; password: string }): boolean {
    const validEmail = 'test@email.com';
    const validPassword = 'password';

    return (
      credentials.email === validEmail && credentials.password === validPassword
    );
  }

  generateToken(credentials: { email: string; password: string }): string {
    const timestamp = new Date().getTime();
    const userToken = `${credentials.email}-${credentials.password}-${timestamp}`;
    return btoa(userToken);
  }

  setToken(token: string): void {
    try {
      localStorage.setItem(this.TOKEN_KEY, token);
    } catch (error) {
      console.error('Error setting token in localStorage:', error);
    }
  }

  getToken(): string | null {
    try {
      return localStorage.getItem(this.TOKEN_KEY);
    } catch (error) {
      console.error('Error getting token from localStorage:', error);
      return null;
    }
  }

  removeToken(): void {
    try {
      localStorage.removeItem(this.TOKEN_KEY);
    } catch (error) {
      console.error('Error removing token from localStorage:', error);
    }
  }

  constructor() {}
}
