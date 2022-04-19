import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { SocketIoModule } from 'ngx-socket-io';
import { environment } from '../environments/environment';
// import component
import { Tab2Page } from './tab2/tab2.page';
import { FormsModule } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FullScreenImage } from '@ionic-native/full-screen-image/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ImageSanitizerPipe } from './pipes/image-sanitizer.pipe';
import { ChatPage } from './components/chat/chat.page';
import { Tab1Page } from './tab1/tab1.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
const config = { url: environment.url, options: {} };
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent, Tab2Page, ImageSanitizerPipe, ChatPage
        ],
        entryComponents: [Tab2Page, ChatPage],
        imports: [
            BrowserModule,
            HttpClientModule,
            FormsModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            IonicStorageModule.forRoot(),
            SocketIoModule.forRoot(config)
        ],
        exports: [],
        providers: [
            Tab1Page,
            Tab2Page,
            ChatPage,
            StatusBar,
            SplashScreen,
            FullScreenImage,
            LocalNotifications,
            Screenshot,
            Camera,
            FileTransfer,
            BackgroundMode,
            OneSignal,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map