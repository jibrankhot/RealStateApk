import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
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
  // @ViewChild('Form') addPropertyComponent: NgForm;
  @ViewChild('AddPropTabs') AddPropTabs: TabsetComponent;
  AddPropertyForm: FormGroup;

  //WILL Come for MasterTable/Database
  propertyTypes: Array<string> = ['House', 'Appartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  nextClicked: boolean;
  cityList: any[];

  datePipe: any;
  property: any;

  mapProperty(): void {
    // this.propertyView.id = this.housingService.newPropID();
    this.propertyView.sellRent = +this.SellRent.value;
    this.propertyView.bhk = this.BHK.value;
    this.propertyView.propertyTypeId = this.PType.value;
    this.propertyView.name = this.Name.value;
    this.propertyView.CityId = this.City.value;
    this.propertyView.furnishingTypeId = this.FType.value;
    this.propertyView.price = this.Price.value;
    this.propertyView.security = this.Security.value;
    this.propertyView.maintenance = this.Maintenance.value;
    this.propertyView.BuiltArea = this.BuiltArea.value;
    this.propertyView.carpetArea = this.CarpetArea.value;
    this.propertyView.floorNo = this.FloorNo.value;
    this.propertyView.totalFloors = this.TotalFloor.value;
    this.propertyView.address = this.Address.value;
    this.propertyView.address2 = this.LandMark.value;
    this.propertyView.readyToMove = this.RTM.value;
    this.propertyView.gated = this.Gated.value;
    this.propertyView.mainEntrance = this.MainEntrance.value;
    this.propertyView.estPossessionOn = this.datePipe.transform(
      this.PossessionOn.value,
      'MM/dd/yyyy'
    );
    this.property.description = this.Description.value;
  }
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
    readyToMove: null,
    sellRent: 0,
    bhk: null,
    propertyTypeId: null,
    name: null,
    CityId: null,
    furnishingTypeId: null,
    price: null,
    security: null,
    maintenance: null,
    carpetArea: null,
    floorNo: null,
    totalFloors: null,
    address: null,
    address2: null,
    gated: null,
    mainEntrance: null,
    estPossessionOn: null,
  };

  constructor(
    private toastr: ToastrService,
    private alertyfy: AlertyfyToastService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.createAddPropertyForm();
  }

  createAddPropertyForm() {
    this.AddPropertyForm = this.formBuilder.group({
      BasicInfo: this.formBuilder.group({
        SellRent: ['1', Validators.required],
        PType: [null, Validators.required],
        Name: [null, Validators.required],
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
      }),

      PriceInfo: this.formBuilder.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null],
      }),

      AddressInfo: this.formBuilder.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),

      OtherInfo: this.formBuilder.group({
        RTM: [null, Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null],
      }),
    });
  }

  // #region <Getter Methods>
  // #region <FormGroups>
  get BasicInfo() {
    return this.AddPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  get PriceInfo() {
    return this.AddPropertyForm.controls['PriceInfo'] as FormGroup;
  }

  get AddressInfo() {
    return this.AddPropertyForm.controls['AddressInfo'] as FormGroup;
  }

  get OtherInfo() {
    return this.AddPropertyForm.controls['OtherInfo'] as FormGroup;
  }
  // #endregion

  // #region <Form Controls>
  get SellRent() {
    return this.BasicInfo.controls['SellRent'] as FormControl;
  }

  get BHK() {
    return this.BasicInfo.controls['BHK'] as FormControl;
  }

  get PType() {
    return this.BasicInfo.controls['PType'] as FormControl;
  }

  get FType() {
    return this.BasicInfo.controls['FType'] as FormControl;
  }

  get Name() {
    return this.BasicInfo.controls['Name'] as FormControl;
  }

  get City() {
    return this.BasicInfo.controls['City'] as FormControl;
  }

  get Price() {
    return this.PriceInfo.controls['Price'] as FormControl;
  }

  get BuiltArea() {
    return this.PriceInfo.controls['BuiltArea'] as FormControl;
  }

  get CarpetArea() {
    return this.PriceInfo.controls['CarpetArea'] as FormControl;
  }

  get Security() {
    return this.PriceInfo.controls['Security'] as FormControl;
  }

  get Maintenance() {
    return this.PriceInfo.controls['Maintenance'] as FormControl;
  }

  get FloorNo() {
    return this.AddressInfo.controls['FloorNo'] as FormControl;
  }

  get TotalFloor() {
    return this.AddressInfo.controls['TotalFloor'] as FormControl;
  }

  get Address() {
    return this.AddressInfo.controls['Address'] as FormControl;
  }

  get LandMark() {
    return this.AddressInfo.controls['LandMark'] as FormControl;
  }

  get RTM() {
    return this.OtherInfo.controls['RTM'] as FormControl;
  }

  get PossessionOn() {
    return this.OtherInfo.controls['PossessionOn'] as FormControl;
  }

  get AOP() {
    return this.OtherInfo.controls['AOP'] as FormControl;
  }

  get Gated() {
    return this.OtherInfo.controls['Gated'] as FormControl;
  }

  get MainEntrance() {
    return this.OtherInfo.controls['MainEntrance'] as FormControl;
  }

  get Description() {
    return this.OtherInfo.controls['Description'] as FormControl;
  }

  // #endregion
  // #endregion

  onSubmit() {}

  selectTab(tabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    if (IsCurrentTabValid) {
      if (this.AddPropTabs?.tabs[tabId]) {
        this.AddPropTabs.tabs[tabId].active = true;
      }
    }
  }
}
