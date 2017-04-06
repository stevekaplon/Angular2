import { NgModule, InjectionToken } from '@angular/core';

// http://stackoverflow.com/questions/43193049/app-settings-the-angular-4-way/43193574#43193574
// https://angular.io/docs/ts/latest/api/core/index/InjectionToken-class.html
export class AppConfig {
    apiEndpoint: string;
}
export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
export const APP_DI_CONFIG: AppConfig = {
    apiEndpoint: 'http://localhost:8000/api/v1'
};
@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }
