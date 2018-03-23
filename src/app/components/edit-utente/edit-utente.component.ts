import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, Data } from '@angular/router';
import { FormBuilder, FormsModule, Validators, FormGroup } from '@angular/forms';
import { User } from '../../class/user';
import { UserListService } from '../../services/user.list.service';



@Component({
  selector: 'app-edit-utente',
  templateUrl: './edit-utente.component.html',
  styleUrls: ['./edit-utente.component.css']
})
export class EditUtenteComponent implements OnInit {

  currentUser: User = new User();
  initialState: User = this.currentUser.clona();
  isChanged = false;
  data: string;
  initialData: string;
  editForm: FormGroup;

  constructor(private router: ActivatedRoute, private listUsers: UserListService, private utilityRouter: Router, private fb: FormBuilder) {//ActivatedRoute rappresenta il route corrente


    this.router.params.subscribe(params => {
      if (params['id'] != '' && params['id'] != null) {
        this.currentUser = this.listUsers.checkUserProfile(params['id'], "",false);
        this.initUser();


      }
    });

    this.utilityRouter.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.assignTocurrentUser();
        if (this.currentUser != undefined) {
          this.isChanged = this.listUsers.isChanged(this.currentUser);
        } else {
          this.isChanged = false;
        }
      }
    });


  }

  createForm() {

    this.editForm = this.fb.group({
      username: [this.currentUser.username, Validators.required],
      email: [this.currentUser.email, Validators.required],
      name: [this.currentUser.name, Validators.required],
      last_name: [this.currentUser.lastName, Validators.required],
      data: [this.data, Validators.required],
      birthCity: [this.currentUser.birthCity, Validators.required],
      newsletterSub: [this.currentUser.newsletterSub, Validators.required]
    });
  }

  resetForm() {
    this.editForm = this.fb.group({
      username: [this.initialState.username, Validators.required],
      email: [this.initialState.email, Validators.required],
      name: [this.initialState.name, Validators.required],
      last_name: [this.initialState.lastName, Validators.required],
      data: [this.data, Validators.required],
      birthCity: [this.initialState.birthCity, Validators.required],
      newsletterSub: [this.initialState.newsletterSub, Validators.required]
    });
  }

  ngOnInit() {
    this.createForm();
  }

  initUser() {
    this.initialState.changeValues(this.currentUser);
    this.data = this.currentUser.formatDate(this.currentUser.birthDate);
    this.initialData = this.data;
  }
  assignTocurrentUser() {
    this.data = this.editForm.value.data;
    let workDate: Date = new Date(this.reverseFormatDate(new Date(this.data)))
    this.currentUser.email= this.editForm.value.email;
    this.currentUser.birthDate = workDate;
    this.currentUser.username = this.editForm.value.username;
    this.currentUser.name = this.editForm.value.name;
    this.currentUser.lastName = this.editForm.value.last_name;
    this.currentUser.birthCity = this.editForm.value.birthCity;
    this.currentUser.newsletterSub = this.editForm.value.newsletterSub;
  }

  reverseFormatDate(date: Date) {

    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
  }

  edit(){
    this.assignTocurrentUser();
    this.listUsers.editUserProfile(this.currentUser);
    alert("modifiche applicate correttamente");
  }

}
