import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { CartProduct } from '../models/cart-products.model';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
      
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      
    }
  `]
})
export class NavbarComponent implements OnInit {
  sumOfCart = 0;
  isLoggedIn = false;
  closeResult = '';
  language = "";

  constructor(private translate: TranslateService,
    private cartService: CartService,
    private authService: AuthService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem("userData") !== null
    this.authService.loggedInChanged.subscribe(() => {
      this.isLoggedIn = sessionStorage.getItem("userData") !== null
    })
    const lang = localStorage.getItem("language");
    if (lang) {
    this.useLanguage(lang)
    }
    else {
      this.useLanguage("ee")
    }

    this.cartService.cartChanged.subscribe(products =>{
      this.sumOfCart = this.cartService.calculateCartSum(products);
      });



  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
    this.language = language;
    
  }

  onLogOut() {
    this.authService.logout();
    this.authService.loggedInChanged.next(false);
  }

  openSm(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'sm', centered: true, windowClass: 'dark-modal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    if (this.isLoggedIn) {
      this.test
      console.log("close modal");
      
    }

  };

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  test(modal: any) {
      modal.close()
  }

}
