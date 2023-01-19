import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {User} from '../../seguridad/models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../seguridad/services/user.service';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss'],
})
export class PerfilUsuarioComponent implements OnInit {
  public usuario: User;
  public perfilForm: FormGroup;


  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private toastrService: NbToastrService) {
    this.usuario = this.authService.usuario;
  }

  ngOnInit(): void {
    this.perfilForm = this.formBuilder.group({
      name: [this.usuario.name, [Validators.required]],
      username: [this.usuario.username, [Validators.required]],
      email: [this.usuario.email, [Validators.required, Validators.email]],
    });
  }

  edituser() {
    this.userService.updateUser(this.usuario._id, this.perfilForm.value)
      .subscribe(resp => {
        const {name, username, email} = resp.userUpdate;
        this.usuario.name = name;
        this.usuario.username = username;
        this.usuario.email = email;
        this.toastrService.success('User Edited successfully!', 'Done!');
      });
  }

}
