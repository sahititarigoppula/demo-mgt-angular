import { Component } from '@angular/core';
import appdata from './appdata'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tailwind CSS Demo';
  datalist: appdata[] = [
    {
    Order: 'cafcfsgdva88aF',
    Customer: 'Tyrion Lannister',
    Products: 3,
    Status: 'Pending',
    Totalprice: 2350,
    Approve: 'Approve'
    },
  {
      Order: '326buuyifookfsI',
      Customer: 'James',
      Products: 2,
      Status: 'Pending',
      Totalprice: 119,
      Approve: 'Approve'
      },
      {
        Order: 'dahdudawfeg09866U',
        Customer: 'Leonard Triump',
        Products: 5,
        Status: 'Pending',
        Totalprice: 5566,
        Approve: 'Approve'
    },
     {
      Order: 'uwfbdqi89Tyf',
      Customer: 'Daniel',
      Products: 1,
      Status: 'Pending',
      Totalprice: 120,
      Approve: 'Approve'
  },
  {
    Order: 'gufy58WERhbmKL',
    Customer: 'jicsnwvegegpep',
    Products: 3,
    Status: 'Pending',
    Totalprice: 541,
    Approve: 'Approve'
},
{
  Order: 'kkpkwOawfeg09866U',
  Customer: 'Dniasaina',
  Products: 9,
  Status: 'Pending',
  Totalprice: 9650,
  Approve: 'Approve'
},
{
  Order: 'dahdfewOO098YT',
  Customer: 'Hjyuikxapxd',
  Products: 6,
  Status: 'Pending',
  Totalprice: 3259,
  Approve: 'Approve'
},
  ];
}
