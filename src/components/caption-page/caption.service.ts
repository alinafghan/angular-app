import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',  // Could also be added in 'caption.module.ts' under providers
})

export class CaptionService {
  private apiUrl = `${environment.BACKEND_URL}/generate-caption`; 

  constructor(private http: HttpClient) {}
}
