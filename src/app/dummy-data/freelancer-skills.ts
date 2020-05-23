import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})


export class Skills {
    skills =  [
        {
          title:'Web Development',
          technologies: [
            {
              title: "HTML"
            },
            {
              title: "CSS"
            }
            ,{
              title: "Javascript"
            }
            ,{
              title: "Angular"
            }
            ,{
              title: "Nodejs"
            }
          ]
        },
        {
          title: "Designing",
          technologies: [
            {
              title: "PhotoShop"
            },
            {
              title: "Figma"
            }
            ,{
              title: "Adobe Xd"
            }
            ,{
              title: "Angular"
            }
            ,{
              title: "Adobe Illustator"
            }
          ]
         
        },
        {
          title:'Writing & Content',
          technologies: [
            {
              title: "Article writing"
            },
            {
              title: "Copyright Wrting"
            }
            ,{
              title: "Content Writing"
            }
            ,{
              title: "Research"
            }
          ]
        }
      ]

      selectedTechnologies = [
        'HTML',"CSS","JavaScript", "Angular", "SEO", "NodeJs"
      ]
}