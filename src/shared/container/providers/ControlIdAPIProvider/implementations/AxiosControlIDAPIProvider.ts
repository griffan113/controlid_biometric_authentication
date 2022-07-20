import axios, { AxiosError, AxiosInstance } from 'axios';
import { injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

@injectable()
export default class AxiosControlIDAPIProvider {
  private _baseURL: string;

  private _login: string;

  private _password: string;

  public instance: AxiosInstance;

  constructor() {
    this._baseURL = 'http://192.168.0.129';
    this._login = 'admin';
    this._password = 'admin';

    this.instance = axios.create({
      baseURL: this._baseURL,
    });
  }

  public isAuthenticated = false;

  public async authenticate() {
    try {
      const response = await this.instance.post('login.fcgi', {
        login: this._login,
        password: this._password,
      });

      this.isAuthenticated = true;

      this.instance.interceptors.request.use(config => {
        const requestConfig = config;

        requestConfig.url = `${requestConfig.url}?session=${response.data.session}`;

        return requestConfig;
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new AppError(`Falha ao autenticar: ${error.message}`);
      }
    }
  }
}
