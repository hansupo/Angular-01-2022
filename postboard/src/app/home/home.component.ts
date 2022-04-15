import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostingService } from '../posting.service';
import { RefreshService } from '../refresh.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postings: Post[] = []
  todayDateTime! :any
  

  constructor(
    private postingService: PostingService,
    private refreshService: RefreshService,
    private router: Router,
    private datePipe: DatePipe
    ) { 
      this.todayDateTime = datePipe.transform(Date.now(),'d.MM.y HH:mm');
     }

  ngOnInit(): void {
    this.getPostsFromDatabase();
    this.refreshService.refreshHome.subscribe(() => this.getPostsFromDatabase());
  }


  private getPostsFromDatabase(): void {
    this.postingService.getPosts().subscribe(res => {
      this.postings = res;
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }
      this.postings = newArray.reverse();

    });
  }



}
