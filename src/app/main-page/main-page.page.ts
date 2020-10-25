import { Component, OnInit } from '@angular/core';
import { VehicleDTO } from 'src/app/entity';
import { VehicleServiceService } from '../vehicle-service.service';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  vehicle: VehicleDTO = new VehicleDTO();
  private reg1: string;
  private reg2: string;
  private vehicleDetailsLoaded: boolean;

  constructor(
    
    private vehicleservice: VehicleServiceService,
    private navCtrl: NavController

    ) { }

  ngOnInit() {
  }

  searchVehicle() {

    this.reg1 = this.vehicle.registration_no.slice(0,5);
    this.reg2 = this.vehicle.registration_no.slice(5,11);

    let addResponse = this.vehicleservice.getVehicleDetails(this.reg1, this.reg2);
    addResponse.subscribe(
      data => {

        this.vehicleDetailsLoaded = false;
        console.log(this.reg1,this.reg2)
        this.vehicle = data as VehicleDTO

        if (this.vehicle.registration_no == null) {

          alert("Vehicle Not Found ");
          this.navCtrl.pop();
        }

        else{

          this.vehicleDetailsLoaded = true
          this.vehicle = data as VehicleDTO

        }
      });
  }


}
