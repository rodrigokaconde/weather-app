import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent {
  @Input() weather: Weather;

  get weatherIcon(): string{
    console.log(this.weather.icon);
    return `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`;
    
  }
}

