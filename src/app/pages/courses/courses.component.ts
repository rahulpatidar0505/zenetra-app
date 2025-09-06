import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = [
    {
      id: 'playwright',
      title: 'Playwright Automation',
      image: '/assets/images/courses/playwright1.jpg',
      description: 'Microsoft Playwright with TypeScript course. Created for both beginners and experienced learners. Personalized mentorship throughout the class.',
      link: '/courses/playwright-automation'
    },
    {
      id: 'java',
      title: 'Java Development',
      image: '/assets/images/courses/Java.jpg',
      description: 'Master Java development with Spring Boot. Build enterprise applications with modern architecture patterns and best practices.',
      link: '/courses/java-development'
    },
    {
      id: 'security',
      title: 'Security Testing',
      image: '/assets/images/courses/Security.jpg',
      description: 'Introduction to JavaScript for the very beginners. Write your first code, understand the core programming concepts, assess your knowledge.',
      link: '/courses/java-development'
    }
  ];
}
