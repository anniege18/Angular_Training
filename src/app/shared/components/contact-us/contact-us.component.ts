import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConfigOptionsService } from "../../../core/configOptions/config-options.service";
import { VERSION, IVersion } from '../../../core/constants'
import {RandomNChars} from "../../../core/generator/generator.service";
import {CapitalizePipe} from "../../pipes/capitalize/capitalize.pipe";

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
    @Optional() public configOptionsService: ConfigOptionsService,
    @Optional() @Inject(VERSION) public version: IVersion,
    @Optional() @Inject(RandomNChars) private randomN: string
  ) { }

  ngOnInit() {
    let capitalize = new CapitalizePipe();

    Object.keys(companyData).forEach(key => {
      const value = key == 'id' ? this.randomN : companyData[key];
      this.configOptionsService[`set${capitalize.transform(key)}`](value);
  });
  }
}
