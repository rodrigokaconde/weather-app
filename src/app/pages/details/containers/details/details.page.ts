import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/state/app.reducer';
import { Units } from 'src/app/shared/models/units.enum';
import { CityDailyWeather } from 'src/app/shared/models/weather.model';

import * as fromDetailsActions from '../../state/details.actions'


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.css']
})
export class DetailsPage implements OnInit {
  details$: Observable<CityDailyWeather>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  unit$: Observable<Units>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(fromDetailsActions.loadWeatherDetails());
  }

}
