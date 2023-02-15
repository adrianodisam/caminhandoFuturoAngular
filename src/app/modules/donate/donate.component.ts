import { Component, ElementRef, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  pixCopiaeColaValue = "00020126360014BR.GOV.BCB.PIX0114473897880001335204000053039865802BR5924Caminhando para o Futuro6009Sao Paulo62070503***6304D97B"

  constructor(
    protected activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  copyToClipboard(stringToCopy: string) {
    navigator.clipboard.writeText(stringToCopy)
  }
}
