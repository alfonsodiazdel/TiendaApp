import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { ProductoComponent } from './components/producto/producto.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ItemComponent } from './components/item/item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CarroComponent } from './components/carro/carro.component';
import {MatTableModule} from '@angular/material/table';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogproductoComponent } from './components/dialogproducto/dialogproducto.component';
import { DialogproductoAgregarComponent } from './components/dialogproducto-agregar/dialogproducto-agregar.component';
import { LoginComponent } from './components/login/login.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider
} from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PerfilComponent,
    MenuComponent,
    ContenedorComponent,
    ProductoComponent,
    ItemComponent,
    CarroComponent,
    MantenimientoComponent,
    DialogproductoComponent,
    DialogproductoAgregarComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    SocialLoginModule,

  ],
  providers:  [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '915587461394-ch2han8kqkuke37gles1juq0cqefn621.apps.googleusercontent.com'
            )
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
