import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  tiles: Tile[] = [
    { text: 'One', cols: 2, rows: 4, color: 'none' },
    { text: 'Two', cols: 1, rows: 4, color: 'none' },
    { text: 'Three', cols: 1, rows: 4, color: 'none' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}