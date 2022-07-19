import { AxiosInstance } from 'axios';

export default interface IControlIdApiProvider {
  authenticate(): Promise<void>;
  instance: AxiosInstance;
  isAuthenticated: boolean;
}
