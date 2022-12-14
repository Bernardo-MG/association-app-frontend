import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from '../../model/register-form';
import { SecurityRegisterService } from '../../service/security-register.service';

@Component({
  selector: 'app-security-register-view',
  templateUrl: './security-register-view.component.html',
  styleUrls: ['./security-register-view.component.sass']
})
export class SecurityRegisterViewComponent {

  constructor(
    private service: SecurityRegisterService,
    private router: Router
  ) { }

  public onRegister(data: RegisterForm): void {
    this.service.register(data).subscribe(d => {
      this.router.navigate(['/']);
    });
  }

}
