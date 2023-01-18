import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {User} from '../../seguridad/models/user';

@Component({
  selector: 'ngx-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss'],
})
export class PerfilUsuarioComponent implements OnInit {
  public datosUser: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.datosUser = this.authService.usuario;
    console.log(this.datosUser);
  }

}
