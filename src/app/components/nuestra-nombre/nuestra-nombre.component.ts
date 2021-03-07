import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nuestra-nombre',
  templateUrl: './nuestra-nombre.component.html',
  styleUrls: ['./nuestra-nombre.component.css']
})
export class NuestraNombreComponent implements OnInit, OnChanges {

  @Input() nombre!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

}
