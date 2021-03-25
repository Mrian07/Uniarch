import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ActionSheetController, LoadingController, NavController } from '@ionic/angular';
import { UtilService } from '../services/util/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  akses: any = [];
  nama_pel: any;
  jk_pel: any;
  no_telp_pel: any;
  email_pel: any;
  info_lain_pel: any;
  provinsi_pel: any;
  kota_pel: any;
  kecamatan_pel: any;
  alamat_pel: any;
  nama_bank: any;
  rek: any;

  constructor(
    private route: Router,
    public storage: Storage,
    private navCtrl: NavController,
    public actionSheet: ActionSheetController,
    private util: UtilService,
    public loadingCtrl: LoadingController
  ) 

  {
    // const aks = localStorage.getItem('akses');
    this.akses = JSON.parse(localStorage.getItem('akses')) || [];
    console.log('userid', this.akses);
    console.log('nama', this.akses[0].nama_pel);
    
    this.nama_pel = this.akses[0].nama_pel;
    this.jk_pel = this.akses[0].jk_pel;
    this.no_telp_pel = this.akses[0].no_telp_pel;
    this.email_pel = this.akses[0].email_pel;
    this.info_lain_pel = this.akses[0].info_lain_pel;
    this.provinsi_pel = this.akses[0].provinsi_pel;
    this.kota_pel = this.akses[0].kota_pel;
    this.kecamatan_pel = this.akses[0].kecamatan_pel;
    this.alamat_pel = this.akses[0].alamat_pel;
    this.nama_bank = this.akses[0].nama_bank;
    this.rek = this.akses[0].rek;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.util.show();
    
    this.util.hide();
  }

  async keluar(){
    const actionSheet = await this.actionSheet.create({
      header: 'Anda yakin ingin keluar?',
      cssClass: 'putih',
      buttons: [{
        text: 'Ya',
        handler: () => {
          this.fungsilogout();
          console.log('Logout');
        }
      },{
        text: 'Tidak',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  } 

  fungsilogout(){
    this.util.showToast('Anda Berhasil Keluar', 'success', 'bottom');
    
    localStorage.removeItem('akses');
    localStorage.removeItem('userid');
    localStorage.clear();
    this.storage.clear();

    //this.route.navigate(['']);

    this.route.navigate(['/tabs/tab1'])
      .then(() => {
        window.location.reload();
    });

  }

  ganti(){
    
  }

}
