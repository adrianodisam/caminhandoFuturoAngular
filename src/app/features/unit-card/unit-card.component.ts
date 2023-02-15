import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css']
})
export class UnitCardComponent implements OnInit {
  @Input() imageSrc: string = ""
  @Input() title: string = ""
  @Input() firstSubtitle: string = ""
  @Input() secondSubtitle: string = ""
  @Input() address: string = ""
  @Input() email: string = ""
  @Input() phoneNumber: string = ""
  @Input() facebook: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  openMaps(street: string) {
    window.open("https://www.google.com.br/maps/place/" + street, '_blank')
  }
}
