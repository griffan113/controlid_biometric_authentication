import AppError from '@shared/errors/AppError';
import axios, { AxiosError } from 'axios';
import { injectable } from 'tsyringe';

@injectable()
export default class AxiosControlIDAPIProvider {
  private _baseURL = '192.168.0.129';

  private _username = 'admin';

  private _password = 'admin';

  public instance = axios.create({
    baseURL: this._baseURL,
  });

  public isAuthenticated = false;

  public async authenticate() {
    try {
      const response = await this.instance.post('/login.fcgi', {
        username: this._username,
        password: this._password,
      });

      console.log(response.data);

      this.instance.defaults.params = {
        session: response.data.session,
      };

      this.isAuthenticated = true;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new AppError(`Falha ao autenticar: ${error}`);
      }
    }
  }
}
