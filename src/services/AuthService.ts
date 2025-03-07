import { CustomError } from '../commons/Error';

interface IAuthService {
    login(username: string, password: string): Promise<any>;
    logout(): Promise<any>;
    register(username: string, password: string): Promise<any>;
}

export interface LogRegResponse {
  token: string;
  user: {
      id: string;
      email: string;
      role: string;
  };
}

export interface LogoutResponse{
  message:string;
}

const BASE_URL = '/api/auth/'

class AuthService{
    async login(email: string, password: string): Promise<LogRegResponse|CustomError> {

      return {
        token: "ddddd",
        user: {
            id: "1",
            email: email,
            role: "admin",
        }
      }
      

        const body = {
            email: email,
            password: password,
        };
        try {
            const response = await fetch(BASE_URL+'login', {
              body: JSON.stringify(body),
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
      
            if (!response.ok) {
              return new CustomError(response.status, data.error || 'Something went wrong');
            }
            localStorage.setItem('token', data.token);
            return data as LogRegResponse;
          } catch (error) {
            return new CustomError(500, 'Network error or server not reachable');
          }
    }

    async logout(): Promise<LogoutResponse|CustomError> {
        try{
          const response = await fetch(BASE_URL+'logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          const data = await response.json();
          if (!response.ok) {
            return new CustomError(response.status, data.error || 'Something went wrong');
          }
          localStorage.removeItem('token');
          return data as LogoutResponse;
        }catch(error){
          return new CustomError(500, 'Network error or server not reachable');
        }
     }

    async register(email: string, password: string, name: string, lastName: string): Promise<LogRegResponse|CustomError> {

      return {
        token: "ddddd",
        user: {
            id: "1",
            email: email,
            role: "admin",
        }
      }

        const body = {
            email: email,
            password: password,
            name: name,
            lastName: lastName
        };
        try {
            const response = await fetch(BASE_URL+'signup', {
              body: JSON.stringify(body),
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
      
            if (!response.ok) {
              console.log(data.error);
              return new CustomError(response.status, data.error || 'Something went wrong');
            }
            localStorage.setItem('token', data.token);
            return data as LogRegResponse;
          } catch (error) {
            return new CustomError(500, 'Network error or server not reachable');
          }
    }
}

export default new AuthService();