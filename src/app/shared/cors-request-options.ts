import {BaseRequestOptions, Headers} from '@angular/http';

export class CorsRequestOptions extends BaseRequestOptions {
  headers: Headers = new Headers({
    'X-Requested-With': 'XMLHttpRequest'
  });
  withCredentials: boolean = true;
}