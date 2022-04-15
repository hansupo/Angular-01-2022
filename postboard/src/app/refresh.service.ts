import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Post } from './models/post.model';
import { PostingService } from './posting.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  refreshHome = new Subject();


  constructor() { }

  
}
