import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})


export class Skills {
  skills = [
    {
      title: 'Web Development',
      technologies: [
        {
          title: 'HTML',
          isChecked: false,
        },
        {
          title: 'CSS',
          isChecked: false,
        },
        {
          title: 'Javascript',
          isChecked: false,
        },
        {
          title: 'Angular',
          isChecked: false,
        },
        {
          title: 'Nodejs',
          isChecked: false,
        },
      ],
    },
    {
      title: 'Designing',
      technologies: [
        {
          title: 'PhotoShop',
          isChecked: false,
        },
        {
          title: 'Figma',
          isChecked: false,
        },
        {
          title: 'Adobe Xd',
          isChecked: false,
        },
        {
          title: 'Angular',
          isChecked: false,
        },
        {
          title: 'Adobe Illustator',
          isChecked: false,
        },
      ],
    },
    {
      title: 'Writing & Content',
      technologies: [
        {
          title: 'Article writing',
          isChecked: false,
        },
        {
          title: 'Copyright Wrting',
          isChecked: false,
        },
        {
          title: 'Content Writing',
          isChecked: false,
        },
        {
          title: 'Research',
          isChecked: false,
        },
      ],
    },
  ];

      selectedTechnologies = [
      ]
}
