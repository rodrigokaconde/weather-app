import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/app.reducer';

import * as fromDetailsActions from '../../state/details.actions'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.css']
})
export class DetailsPage implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(fromDetailsActions.loadWeatherDetails());
  }

}
