import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consulter-cheval',
  templateUrl: './consulter-cheval.page.html',
  styleUrls: ['./consulter-cheval.page.scss'],
})
export class ConsulterChevalPage implements OnInit {

  cheval: any = {};
  
  constructor(public api: RestApiService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.getChevalById();
  }

  async getChevalById() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getChevalById(this.route.snapshot.paramMap.get('id'))
    .subscribe(res => {
      console.log(res);
      this.cheval = res;
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }
}
