import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HlmFormFieldModule } from '../../../libs/ui/ui-formfield-helm/src/index';
import { HlmInputDirective } from '../../../libs/ui/ui-input-helm/src/index';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '../../../libs/ui/ui-select-helm/src/index';
import { HlmSelectContentDirective, HlmSelectOptionComponent, HlmSelectValueDirective } from '../../../libs/ui/ui-select-helm/src/index';
import { HlmSelectTriggerComponent } from '../../../libs/ui/ui-select-helm/src/index';
import { HlmDatePickerComponent } from '../../../libs/ui/ui-datepicker-helm/src/index';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  imports: [CommonModule, ReactiveFormsModule,HlmSelectContentDirective,HlmSelectOptionComponent, HlmSelectValueDirective,HlmSelectTriggerComponent,HlmDatePickerComponent, HlmFormFieldModule, HlmInputDirective, BrnSelectImports, HlmSelectImports],
})
export class CampaignComponent {
  campaignForm: FormGroup;
     /** The minimum date */
     public minDate = new Date(2023, 0, 1);

     /** The maximum date */
     public maxDate = new Date(2030, 11, 31);
  apiUrl = 'http://localhost:3000/ads/postCampaign';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.campaignForm = this.fb.group({
      name: ['', Validators.required],
      industry: ['', Validators.required],
      platform: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }

  generateRandomId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  createCampaign(): void {
    console.log(this.campaignForm);
    if (this.campaignForm.invalid) {
      alert('Please fill all fields!');
      return;
    }

    const { name, industry, platform, startDate, endDate } = this.campaignForm.value;
    const duration = `${startDate} to ${endDate}`;

    const newCampaign = {
      campaignId: this.generateRandomId(),
      businessId: this.generateRandomId(),
      campaignName: name,
      industry,
      platform,
      duration
    };

    this.http.post(this.apiUrl, newCampaign).subscribe(
      (response) => {
        console.log('Campaign created:', response);
        alert('Campaign created successfully!');
      },
      (error) => {
        console.error(newCampaign);
        console.error('Error creating campaign:', error);
        alert('Failed to create campaign.');
      }
    );
  }
}
