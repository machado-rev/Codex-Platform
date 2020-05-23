import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class Expertise{
    expertiseArr = [
        {
          title:'Front-End Development Deliverables',
          type:'optional',
          options:[
            'Prototype','Web Design','Animation'
          ],
        },
        {
          title:'Front-End Development Languages',
          type:'optional',
          options:[
            'HTML','CSS','JavaScripts','SQL'
          ],
        },
        {
          title:'Front-End Development Skills',
          type:'optional',
          options:[
            'PhotoShop','Google Analytics','.Net'
          ],
        },
        {
          title:'Business Size Experience',
          type:'optional',
          options:[
            'Very Small (1-9)','Small (10-99)','Mid (100-999)','Large (1000+)','Startup','Fortune 500'
          ],
        }
      ]

      additionalSkillsArr = [
        'HTML','CSS','Website','SCSS', 'React', 'SASS', 'Bootstrap', 'Git', 'Redux', 'JSON', 'Web apps'
      ]
}