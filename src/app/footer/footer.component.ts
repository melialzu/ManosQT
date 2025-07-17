import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faLinkedin= faLinkedin
  faInstagram=faInstagram
  fafacebook = faFacebook
  fainstagram =faInstagram
  fatwitter = faTwitter
  falinkedin = faLinkedin
  fayoutube = faYoutube


}
