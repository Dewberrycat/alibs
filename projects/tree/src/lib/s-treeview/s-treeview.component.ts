import { Component } from '@angular/core';

@Component({
  selector: 'lib-s-treeview',
  templateUrl: './s-treeview.component.html',
  styleUrl: './s-treeview.component.css'
})
export class STreeviewComponent {
  data = [
    {
      name: 'audi',
      exp: false,
      children: [
        {
          name: 'audi 1',
          exp: false,
          children: []
        },
        {
          name: 'audi 2',
          exp: false,
          children: [
            {
              name: 'audi 2 1',
              exp: false,
              children: []
            },
            {
              name: 'audi 2 2',
              exp: false,
              children: []
            }
          ]
        }
      ]
    },
    {
      name: 'kia',
      exp: false,
      children: []
    },
    {
      name: 'honda',
      exp: false,
      children: []
    }
  ];

}
