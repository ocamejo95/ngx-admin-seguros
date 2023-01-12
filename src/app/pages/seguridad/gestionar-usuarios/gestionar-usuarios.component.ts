import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {UserService} from '../services/user.service';
import {NbToastrService} from '@nebular/theme';
import Swal from 'sweetalert2';

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

  constructor(private userService: UserService,
              private toastrService: NbToastrService) {
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
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#497bff',
      cancelButtonColor: '#ff4274',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(event.data._id)
          .subscribe(resp => {
            this.getListUser();
            this.toastrService.success('User deleted successfully!', 'Done!');
          });
      }
    });
  }

  onUpdateConfirm(event) {
    console.log(event.data, 'siii');
  }

  onAddConfirm(event) {

  }

}
