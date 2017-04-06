import { Component, OnInit } from '@angular/core';
import { FooService } from './services/foo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FooService]
})
export class AppComponent implements OnInit {
  public title = '';
  private _fooService;
  constructor(private fooService: FooService) {
    this._fooService = fooService;
  };
  getConfig(): void {
    this.title = this._fooService.canGetConfig();
  }
  ngOnInit() {
    this.getConfig();
  }
}
