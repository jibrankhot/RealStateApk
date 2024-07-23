import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css'],
})
export class AddpropertyComponent implements OnInit {
  constructor(private toastr: ToastrService) {}
  ngOnInit(): void {}
  onSubmit(Form: NgForm) {
    console.log(Form);
  }
  BlankNameToast() {
    this.toastr.error('Please Enter Name', 'Error');
  }
}
