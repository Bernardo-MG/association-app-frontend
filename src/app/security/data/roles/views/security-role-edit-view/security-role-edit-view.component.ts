import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '@app/security/models/role';
import { SecurityRoleService } from '../../service/security-role.service';

@Component({
  selector: 'security-role-edit-view',
  templateUrl: './security-role-edit-view.component.html',
  styleUrls: ['./security-role-edit-view.component.sass']
})
export class SecurityRoleEditViewComponent implements OnInit {

  role: Role = new Role();

  constructor(
    private route: ActivatedRoute,
    private service: SecurityRoleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.load(params.get('id'));
    });
  }

  save(data: Role): void {
    this.service.update(data.id, data).subscribe(d => {
      this.router.navigate(['/security/roles']);
    });
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(d => {
      this.router.navigate(['/security/roles']);
    });
  }

  private load(id: string | null): void {
    if (id) {
      const identifier: number = Number(id);
      this.service.getOne(identifier)
        .subscribe(d => {
          this.role = d;
        });
    }
  }

}