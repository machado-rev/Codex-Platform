import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategorySpecialization {
    data = [
    {
      category: 'Accounting',
      specialization: ['Accounting Careers', 'Auditor', 'Budget Analyst', 'Forensic Accountant', 'Tax Accountant'],
    },
    {
      category: 'Digital Marketing',
      specialization: ['Digital Marketing Executive', 'SEO Executive', 'Social Media Executive', ' PPC Expert', 'E-Mail Marketer'],
    },
    {
      category: 'Web Development',
      specialization: ['Web Designer', 'UX Designer / UI Designer', 'Front-End Developer', 'Back-End Developer', 'SEO Copywriter', 'Digital Marketer', 'Dev Ops'],
    },

  ]


}
