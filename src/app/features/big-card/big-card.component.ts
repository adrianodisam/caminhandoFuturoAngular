import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() imageSrc: string = ""
  @Input() title: string = ""
  @Input() subtitle: string = ""
  @Input() description: string = ""
  @Input() buttonLabel: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
