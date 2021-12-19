import { ColorService } from './../../services/color.service';
import { Color } from './../../models/entities/color';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getAllColors();
  }
  getAllColors() {
    this.colorService.getAllColor().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
