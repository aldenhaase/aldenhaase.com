import { Component } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.scss']
})
export class DrumsComponent {
  faAngleDown = faAngleDown;
  menuActivated = false;
}
