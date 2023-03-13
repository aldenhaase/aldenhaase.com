import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }
  menuItems: links[] = [
      {route: "lystr",    displayName: "- LYSTR -",        type: "project"},
      {route: "keyboard", displayName: "- USB KEYBOARD -", type: "project"},
      {route: "map",      displayName: "- MAPS FOR BIRDS -", type: "project"},
      {route: "drums",    displayName: "- MACHINE VISION DRUMS -", type: "project"},
      {route: "",         displayName: "",                 type: "disabled"},
      {route: "",         displayName: "",                 type: "disabled"},
      {route: "",         displayName: "",                 type: "disabled"},
      {route: "",         displayName: "",                 type: "disabled"},
      {route: "resume",   displayName: "-  RESUME -",      type: "info"},
      {route: "about",    displayName: "- ABOUT -",        type: "info"},
                   ]
  ngOnInit(): void {
  }

}

interface links{
  route: string
  displayName: string
  type: string
}
