import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {UserService} from '../services/user.service';

@Component({
  selector: 'ngx-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.scss'],
})
export class GestionarUsuariosComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {

      name: {
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
    },
    pager: {display: true, perPage: 15},
    actions: {
      add: true,
      position: 'right',
    },
    mode: 'external',

  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getListUser();
  }

  getListUser() {
    this.userService.getAllUser()
      .subscribe(resp => {
        this.source = resp.resultFind;
      });
  }


  onDeleteConfirm(event) {
    this.userService.deleteUser(event.data._id)
      .subscribe(res => {
        this.getListUser();
        console.log('Se eliminooooo');
      });
  }

  onUpdateConfirm(event) {
    console.log(event.data, 'siii');
  }

  onAddConfirm(event) {
    console.log('Addddddd');
  }

}
