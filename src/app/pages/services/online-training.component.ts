import { Component } from '@angular/core';

@Component({
  selector: 'app-online-training',
  standalone: true,
  template: `<section class='service-detail'><h2>Online Training</h2><p>Details about our Online Training services.</p></section>`,
  styles: [`.service-detail { padding: 2rem; } h2 { color: #013024; }`]
})
export class OnlineTrainingComponent {}
