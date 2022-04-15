import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostingService } from '../posting.service';
import { RefreshService } from '../refresh.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postings: Post[] = [];
  postDateTime!: any

  constructor(
    private postingService: PostingService,
    private refreshService: RefreshService,
    private datePipe: DatePipe,
    private router: Router
    ) { 
      this.postDateTime = datePipe.transform(Date.now(),'d.MM.y HH:mm');
    }

  ngOnInit(): void {
    this.getPostsFromDatabase(); 
  }

  private getPostsFromDatabase(): void {
    this.postingService.getPosts().subscribe(res => {
      this.postings = res;
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }
      this.postings = newArray
    });
  }

  onSubmit(postForm: NgForm) {

    const post = postForm.value
    post.date = this.postDateTime
    post.username = "Hans"
    post.pic ="https://picsum.photos/200"
    console.log(post);
    

    if (postForm.valid) {

      this.postingService.addPost(post).subscribe( () => {
        postForm.reset();
        this.router.navigateByUrl("/")

        
      })
    }
    
  }
  


}
