import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
selector: 'app-list',
templateUrl: 'list.page.html',
styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
private chevaux: any;
public items: Array<{ title: string; note: string; icon: string }> = [];
constructor(public api: RestApiService, public loadingController: LoadingController) { }

ngOnInit() {
this.getChevaux();
}

async getChevaux() {
const loading = await this.loadingController.create({
message: 'Loading'
});
await loading.present();
await this.api.getChevaux()
.subscribe(res => {
console.log(res);
this.chevaux = res;
loading.dismiss();
}, err => {

  console.log(err);
  loading.dismiss();
  });
  }
  }
