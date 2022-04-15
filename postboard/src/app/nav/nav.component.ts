import { Component, ElementRef, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RefreshService } from '../refresh.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  panelOpenState: boolean = false;

  contentActive: boolean = false;
  contentClose: boolean = false;
// new

  navContent!: string;
  navContentIsOpen: boolean = false;
  navContentIsClose: boolean = false;

  constructor(
    public element: ElementRef,
    public dialog: MatDialog,
    private refreshService: RefreshService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }




  onNavClick(navButton: string) {
    // this.refreshService.refreshHome.next(true); hetkel ei tööta
    if (this.navContentIsOpen) {
      this.smoothCloseNav();
    }
    else {this.navContentIsOpen = true; this.navContent = navButton}
  }

  /////////////////////////////////////// works but fix this
  test() {

    setTimeout(() => {
      this.router.navigateByUrl('/install', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/']);
        console.time;
        
    }); 

    }, 250)

  }

  smoothCloseNav() {
    this.navContentIsClose = true;
    setTimeout(() => {
      this.navContentIsOpen = false;
      this.navContentIsClose = false;

    }, 250)
    // this.test();
  }

  openDialog() {
    if (this.contentActive) {
      this.smoothCloseNav();
    }
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onScrollTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
    if (this.contentActive) {
      // this.smoothCloseNav();

    }
  }





}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
