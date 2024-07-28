import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ToastrService } from 'ngx-toastr';
import { PropertyInterface } from 'src/app/interfaces/property-interface';
import { AlertyfyToastService } from 'src/app/Services/alertyfy-toast.service';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css'],
})
export class AddpropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyComponent: NgForm;
  @ViewChild('AddPropTabs') AddPropTabs: TabsetComponent;

  //WILL Come for MasterTable/Database
  propertyTypes: Array<string> = ['House', 'Appartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: PropertyInterface = {
    id: null,
    Name: '',
    Image: '/assets/house2.jpeg',
    Description: null,
    Price: null,
    Purchaseable: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null,
  };

  constructor(
    private toastr: ToastrService,
    private alertyfy: AlertyfyToastService
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.addPropertyComponent);
    if (this.addPropertyComponent.valid) {
      this.alertyfy.success('Form Was Submitted SuccessFully');
      setTimeout(() => {
        this.addPropertyComponent.reset();
      }, 500);
    } else {
      this.alertyfy.error('Please Fill All Details Correctly');
    }
  }
  BlankNameToast() {
    setTimeout(() => {
      this.toastr.error('Please Enter Name', 'Error');
    }, 200);
  }
  BlankTypeToast() {
    setTimeout(() => {
      this.toastr.error('Please Enter Type', 'Error');
    }, 200);
  }
  BlankPriceToast() {
    setTimeout(() => {
      this.toastr.error('Please Enter Price', 'Error');
    }, 200);
  }

  selectTab(tabId: number) {
    if (this.AddPropTabs?.tabs[tabId]) {
      this.AddPropTabs.tabs[tabId].active = true;
    }
  }
}
