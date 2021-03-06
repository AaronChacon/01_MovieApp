import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ]
})
export class MovieModule { }
