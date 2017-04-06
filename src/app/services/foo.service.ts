import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app-config.module';



@Injectable()
export class FooService {

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  canGetConfig(): string {
    return this.config.apiEndpoint;
  }
}
