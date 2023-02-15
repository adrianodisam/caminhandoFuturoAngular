import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-donate-button',
  templateUrl: './donate-button.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  styleUrls: ['./donate-button.component.css']
})
export class DonateButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
