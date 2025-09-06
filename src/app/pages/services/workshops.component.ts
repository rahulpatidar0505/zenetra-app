import { Component } from '@angular/core';

@Component({
  selector: 'app-workshops',
  standalone: true,
  template: `<section class='service-detail'><h2>Workshops</h2><p>Details about our Workshops services.</p></section>`,
  styles: [`.service-detail { padding: 2rem; } h2 { color: #013024; }`]
})
export class WorkshopsComponent {}
