import { Component, OnInit } from '@angular/core';
import { faAngleDown, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faDocker, faGolang, faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-lystr',
  templateUrl: './lystr.component.html',
  styleUrls: ['./lystr.component.scss']
})
export class LystrComponent implements OnInit {

  constructor() { }
  faAngleDown = faAngleDown;
  faAngular = faAngular;
  faDocker = faDocker;
  faGolang = faGolang;
  faCloud = faCloud;
  faGitHub = faGithub;
  menuActivated = false;
  ngOnInit(): void {
  }

}
