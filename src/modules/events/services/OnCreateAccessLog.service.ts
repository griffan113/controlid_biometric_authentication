import { injectable } from 'tsyringe';

@injectable()
class OnCreateAccessLogService {
  public async execute(requestBody: any) {
    console.log(requestBody);
  }
}

export default OnCreateAccessLogService;
