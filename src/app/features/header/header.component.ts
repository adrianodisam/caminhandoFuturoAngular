import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { NgbCollapseModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DonateComponent } from '../../modules/donate/donate.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule, NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapse: boolean = true
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.elementRef.nativeElement.contains(event.target))
      this.isCollapse = true
  }


  constructor(
    protected router: Router,
    private elementRef: ElementRef,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  windowLocation(location: string) {
    window.location.href = location
  }
  
  openDonateScreen = () => this.modalService.open(DonateComponent, {
    windowClass: "donate-modal"
  })
}
