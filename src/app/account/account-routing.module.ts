import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountChangePasswordViewComponent } from './views/account-password-view/account-password-view.component';
import { AccountProfileViewComponent } from './views/account-profile-view/account-profile-view.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'settings',
                children: [
                    { path: 'profile', component: AccountProfileViewComponent },
                    { path: 'password', component: AccountChangePasswordViewComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }