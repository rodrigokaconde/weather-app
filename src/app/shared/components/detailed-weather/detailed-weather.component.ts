import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Units } from '../../models/units.enum';
import { Weather } from '../../models/weather.model';
import { unitToSymbol } from '../../utils/units.utils';

@Component({
  selector: 'app-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent {
  
    @Input() weather: Weather;
    @Input() unit: Units;
  
    get weatherIcon(): string {
      return `http://openweathermap.org/img/wn/${ this.weather.icon }@2x.png`;
    }
  
    get unitSymbol(): string {
      return unitToSymbol(this.unit);
    }
}

