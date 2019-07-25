import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  private sub;

  constructor(public router: Router, private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.router.navigate(['/weather']);
  }

}
