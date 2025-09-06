import { Component } from '@angular/core';

@Component({
  selector: 'app-project-support',
  standalone: true,
  template: `<section class='service-detail'><h2>Project Support</h2><p>Details about our Project Support services.</p></section>`,
  styles: [`.service-detail { padding: 2rem; } h2 { color: #013024; }`]
})
export class ProjectSupportComponent {}
