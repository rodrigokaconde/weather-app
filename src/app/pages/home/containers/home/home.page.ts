import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityWeather } from 'src/app/shared/models/weather.model';

import * as fromHomeActions from '../../state/home.actions'
import * as fromHomeSelectors from '../../state/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit, OnDestroy{
  cityWeather: CityWeather;
  error$: Observable<boolean>;
  loading$: Observable<boolean>;

  private componentDestroyed$ = new Subject();

  searchControl: FormControl;

  constructor( private store: Store) { }

  ngOnInit() {
    this.searchControl = new FormControl('', Validators.required);

    this.store.pipe(select(fromHomeSelectors.selectCurrentWeather),
    takeUntil(this.componentDestroyed$),
    ).subscribe(value => this.cityWeather = value);
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));
    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
  }

  ngOnDestroy(){
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  doSeach(){
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({query}));
  }

  onToggleBookmark(){
    const bookmark = new Bookmark();
    bookmark.id = this.cityWeather.city.id;
    bookmark.name = this.cityWeather.city.name;
    bookmark.country = this.cityWeather.city.country;
    bookmark.coord = this.cityWeather.city.coord;
    this.store.dispatch(fromHomeActions.toogleBookmark({entity: bookmark}));
  }
}
