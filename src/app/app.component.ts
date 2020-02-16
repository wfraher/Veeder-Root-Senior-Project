import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mainGroup = new FormGroup({
    key: new FormControl('', Validators.required),
    results: new FormControl('', Validators.required)
  });

  constructor(private httpClient: HttpClient) {
  }

  getResults() {
    this.httpClient.get('http://127.0.0.1:5002/flasktest').subscribe(data => {
      const response = Object.keys(data);
      this.mainGroup.get('key').setValue(response[0]);
      this.mainGroup.get('results').setValue(response[1]);
      console.log(response);
    });
  }
}
