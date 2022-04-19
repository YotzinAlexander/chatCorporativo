import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
// importaciones de componentes y modulos
import { Tab2Page } from './tab2/tab2.page';
import { FormsModule } from '@angular/forms';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';

import { Camera } from '@ionic-native/camera/ngx';

import { FullScreenImage } from '@ionic-native/full-screen-image/ngx';

//import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ImageSanitizerPipe } from './pipes/image-sanitizer.pipe';
import { ChatPage } from './components/chat/chat.page';
import { Tab1Page } from './tab1/tab1.page';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ReenviaGrupoPage } from './pages/reenvia-grupo/reenvia-grupo.page';
import { ChatAdminPage } from './pages/chat-admin/chat-admin.page';

import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { File } from '@ionic-native/file/ngx';

import { FilePath } from '@ionic-native/file-path/ngx';

import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

import { FileOpener} from '@ionic-native/file-opener/ngx';

import { Chooser } from '@ionic-native/chooser/ngx';

import { IOSFilePicker } from '@ionic-native/file-picker/ngx';

import { DocumentPicker } from '@ionic-native/document-picker/ngx';



const config: SocketIoConfig = { url: environment.url, options: {} };


@NgModule({
  declarations: [
    AppComponent, Tab2Page, ImageSanitizerPipe, ChatPage, ReenviaGrupoPage, ChatAdminPage
  ],
  entryComponents: [Tab2Page, ChatPage, ReenviaGrupoPage, ChatAdminPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  exports: [

  ],
  providers: [
    Tab1Page,
    Tab2Page,
    ChatAdminPage,
    ChatPage,
    StatusBar,
    SplashScreen,
    FullScreenImage,
    LocalNotifications,
    Screenshot,
    Camera,
    FileTransfer,
    FileChooser,
    //BackgroundMode,
    OneSignal,
    FilePath,
    File,
    FileOpener,
    Chooser,
    DocumentViewer,
    IOSFilePicker,
    DocumentPicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}




