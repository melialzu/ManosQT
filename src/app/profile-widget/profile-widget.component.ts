import { Component, Input } from '@angular/core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { User } from '../users/users.model';

@Component({
  selector: 'app-profile-widget',
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.scss']
})
export class ProfileWidgetComponent {

  @Input()
  user: User | undefined = undefined;



  faEllipsis = faEllipsis;
}
