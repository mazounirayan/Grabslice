import { CustomError } from '../commons/Error';

export interface LogRegResponse {
  token: string;
}

const BASE_URL = '/api/auth/';

class AuthService {
  /**
   * Login function that sends user credentials to the backend.
   * @param email User email
   * @param password User password
   * @returns Token if successful, or an error
   */
  async login(email: string, password: string): Promise<LogRegResponse | CustomError> {
    const body = { email, password };

    try {
      const response = await fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.text(); // Le back renvoie un simple string (le token)

      if (!response.ok) {
        return new CustomError(response.status, 'Invalid email or password');
      }

      localStorage.setItem('token', data);
      return { token: data };
    } catch (error) {
      return new CustomError(500, 'Network error or server not reachable');
    }
  }

  /**
   * Logs out the user by removing the token from local storage.
   */
  logout(): void {
    localStorage.removeItem('token');
  }

  /**
   * Get the stored token from local storage.
   * @returns Token string or null
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Check if a user is authenticated based on token presence.
   * @returns true if a token is stored, false otherwise
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export default new AuthService();
