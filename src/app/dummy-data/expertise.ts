import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Expertise {
  expertiseArr = [
    {
      title: 'Front-End Development Deliverables',
      type: 'optional',
      options: [
        { value: 'Prototype', checked: false },
        { value: 'Web Design', checked: false },
        { value: 'Animation', checked: false },
      ],
    },
    {
      title: 'Front-End Development Languages',
      type: 'optional',
      options: [
        { value: 'HTML', checked: false },
        { value: 'CSS', checked: false },
        { value: 'JavaScripts', checked: false },
        { value: 'SQL', checked: false },
      ],
    },
    {
      title: 'Front-End Development Skills',
      type: 'optional',
      options: [
        { value: 'PhotoShop', checked: false },
        { value: 'Google Analytics', checked: false },
        { value: '.Net', checked: false },
      ],
    }
  ];

  additionalSkillsArr = [
    {value: 'HTML', checked: false},
    {value: 'CSS', checked: false},
    {value: 'Redux', checked: false},
    {value: 'SCSS', checked: false},
    {value: 'React', checked: false},
    {value: 'SASS', checked: false},
    {value: 'Bootstrap', checked: false},
    {value: 'Git', checked: false}
  ];
}
