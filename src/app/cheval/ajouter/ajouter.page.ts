import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../../rest-api.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  nom : string

  constructor(public api: RestApiService, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async addCheval() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();

    await this.api.addCheval(this.nom)
    .subscribe(res => {
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }
}
