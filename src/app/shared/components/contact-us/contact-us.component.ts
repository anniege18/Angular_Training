import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConfigOptionsService } from "../../../core/configOptions/config-options.service";
import { LocalStorageService } from "../../../core/localStorage/local-storage.service";
import { RandomNChars } from "../../../core/generator/generator.service";
import { CapitalizePipe } from "../../pipes/capitalize/capitalize.pipe";
import { VERSION, IVersion } from '../../../core/constants'

const companyData = {
  id: null,
  address: '233 Broadway, New York, NY',
  email: 'info@bookstore.com',
  phone: '+1 212-619-1529'
};

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor(
    @Optional() public localStorageService: LocalStorageService,
    @Optional() public configOptionsService: ConfigOptionsService,
    @Inject(VERSION) public ver: IVersion,
    @Inject(RandomNChars) private randomN: string
) { }

  ngOnInit() {
    let capitalize = new CapitalizePipe();

    if (!this.configOptionsService) return;

    Object.keys(companyData).forEach(key => {
      const value = key == 'id' ? this.randomN : companyData[key];
      this.configOptionsService[`set${capitalize.transform(key)}`](value);
    });

    if (this.localStorageService) {
      if (!this.localStorageService.getItem('appVersion')) {
       this.localStorageService.setItem('appVersion', JSON.stringify(this.ver));
      }
    }
  }
}
