import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class EmployerJobs {
    jobsArr = [
        {
          title:'Lorem ipsum dolor sit amet',
          desc:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!',
          date:'12 March, 2020',
          status:'posted',
          price:60,
          proposals:12,
          shortlisted:2,
          hire:0
        },
        {
          title:'Lorem ipsum dolor sit amet',
          desc:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!',
          date:'30 March, 2020',
          status:'completed',
          price:120,
          proposals:122,
          shortlisted:15,
          hire:2
        },
        {
          title:'Lorem ipsum dolor sit amet',
          desc:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!',
          date:'12 March, 2020',
          status:'active',
          price:60,
          proposals:45,
          shortlisted:5,
          hire:1
        },
        {
          title:'Lorem ipsum dolor sit amet',
          desc:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!',
          date:'12 March, 2020',
          status:'active',
          price:500,
          proposals:78,
          shortlisted:25,
          hire:2
        },
        {
          title:'Lorem ipsum dolor sit amet',
          desc:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!',
          date:'12 March, 2020',
          status:'posted',
          price:500,
          proposals:78,
          shortlisted:25,
          hire:2
        },
        {
          title:'Lorem ipsum dolor sit amet',
          desc:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!',
          date:'12 March, 2020',
          status:'active',
          price:120,
          proposals:122,
          shortlisted:15,
          hire:2
        },
        {
          title:'Lorem ipsum dolor sit amet',
          desc:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!',
          date:'25 March, 2020',
          status:'rejected',
          price:120,
          proposals:122,
          shortlisted:15,
          hire:2
        },
      ]
}