import { Component, OnInit } from '@angular/core';
import { phaserGameConfig } from 'src/game/settings/phaser-game-config-specifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-phaser';
  // private game: Phaser.Game;

  ngOnInit(): void {
    // this.game = 
    new Phaser.Game(phaserGameConfig);
  }

  constructor() {}

}
