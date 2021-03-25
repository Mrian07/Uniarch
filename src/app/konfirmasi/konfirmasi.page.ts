import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { UserData } from '../providers/user-data';
import { UserOptions } from '../interfaces/user-options';
import { AlertController, IonList, LoadingController, ModalController, NavController, ToastController, Config, IonCheckbox, IonSelect } from '@ionic/angular';
import { ConstantService } from '../providers/constant.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { timingSafeEqual } from 'crypto';
import { HttpClient } from '@angular/common/http';
import { API_URL_SLIDER, IMAGE_URL_PRODUCT } from '../providers/constant.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'konfirmasi',
  templateUrl: './konfirmasi.page.html',
  styleUrls: ['./konfirmasi.page.scss'],
})
export class KonfirmasiPage implements OnInit {
  data_user: any = {};
  id_order : any;
  submitted = false;
  loading: any;
  signup : any = {
    id_order : '',
    nama_pemilik : '',
    dari_bank : '',
    ke_bank : 'BANK CENTRAL ASIA',
    jumlah_dana : '',
    tanggal_pembayaran : '',
    bukti : '',
  }
  constructor(
    public http: HttpClient,
    public router: Router,
    public userData: UserData,
    public loadingctrl: LoadingController,
    private consta: ConstantService,
    private userdata: UserData,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    private camera: Camera,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log('view wenter')
    this.signup = {
      id_order : '',
      nama_pemilik : '',
      dari_bank : '',
      ke_bank : 'BANK CENTRAL ASIA',
      jumlah_dana : '',
      tanggal_pembayaran : '',
      bukti : '',
    }    
    this.userdata.getUsername().then( hsl => {
      console.log(hsl, 'hasil');
      if(hsl==null){
        this.router.navigateByUrl('login');
      }else{
        this.data_user=hsl;
        this.id_order = this.route.snapshot.paramMap.get('id');
        this.signup.id_order = this.id_order
      }
    });
  }
  async upload_bukti(){
    // alert('ambil photo');
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.loading = await this.loadingctrl.create({
      message: 'Please wait...'
    });    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.signup.bukti = base64Image;
    });
  }
  async onSignup(form: NgForm) {
    this.submitted = true;
    console.log(this.signup, 'signup')

    if (form.valid) {
      this.loading = await this.loadingctrl.create({
        message: 'Silahkan tunggu....'
      });
      this.loading.present();
      this.http.post(API_URL_SLIDER + 'api_konfirmasi', this.signup)
        // .pipe(map((data: any) => {
        //   console.log(data, 'map')
        //   return data.data;
        // }))
        .subscribe(hasil => {
          let hsl : any = {};
          hsl = hasil;
          if(hsl.code==1){
            // this.signup = {
            //   id_order : '',
            //   nama_pemilik : '',
            //   dari_bank : '',
            //   ke_bank : 'BANK CENTRAL ASIA',
            //   jumlah_dana : '',
            //   tanggal_pembayaran : '',
            //   bukti : '',
            // }
            this.consta.show_alert('Sukses', '', hsl.msg).then( hsl => {
              this.router.navigateByUrl('/riwayat-order')
            })
          }else{
            this.consta.show_alert('Error', '', hsl.msg);
          }
          this.loading.dismiss();
        });
    }
  }  
}
