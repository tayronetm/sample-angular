
import { AuthService } from './../seguranca/auth.service';
import { JwtHelper } from 'angular2-jwt';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';

import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from './../pessoas/pessoa.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { CategoriaService } from './../categorias/categoria.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingBarRouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule,
    LoadingBarRouterModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    ErrorHandlerService,
    AuthService,
    
    ConfirmationService,
    JwtHelper,
    Title
    
  ]
})
export class CoreModule { }
