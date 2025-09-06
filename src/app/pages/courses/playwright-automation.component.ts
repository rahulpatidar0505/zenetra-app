import { Component } from '@angular/core';

@Component({
  selector: 'app-playwright-automation',
  templateUrl: './playwright-automation.component.html',
  styleUrls: ['./playwright-automation.component.scss']
})
export class PlaywrightAutomationComponent {
  activeModule: string | null = null;

  toggleModule(moduleId: string) {
    this.activeModule = this.activeModule === moduleId ? null : moduleId;
  }
}
