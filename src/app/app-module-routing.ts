import { NgModule } from '@angular/core';
import { SalamComponent } from './salam/salam.component';
import { BukuComponent } from './buku/buku.component';
import { PelangganComponent } from './pelanggan/pelanggan.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:"", component:SalamComponent},
    {path:"buku", component:BukuComponent},
    {path:"pelanggan", component:PelangganComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponent = [SalamComponent, BukuComponent, PelangganComponent];
