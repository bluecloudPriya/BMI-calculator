import { Component } from '@angular/core';
import { SampleService } from './sample.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [SampleService]
})

export class AppComponent {
  service: string;
  constructor(private _sampleService: SampleService) {

  }

  ngOnInit(){
    this.service = this._sampleService.sample1();
  }
}
