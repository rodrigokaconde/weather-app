import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Units } from 'src/app/shared/models/units.enum';
import { CityWeather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent {

  @Input() cityWeather: CityWeather;
  @Input() isFavorite: boolean;
  @Input() unit: Units;
  @Output() toggleBookmark = new EventEmitter();

  get cityName(): string{
    return `${this.cityWeather.city.name} ${this.cityWeather.city.country}`;
  }
  onToggleBookmark(){
    this.toggleBookmark.emit();
  }
}
