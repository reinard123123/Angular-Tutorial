// Import statement: Used to import the Component decorator from the '@angular/core' module.
import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete,
]

// Decorator: A type of design pattern used for modifying or enhancing the behavior of classes, methods, properties, or parameters.
@Component({
  selector: 'app-root', // Selector: Defines the HTML tag that represents this component in the DOM.
  templateUrl: './app.component.html', // TemplateUrl: Specifies the location of the HTML template file for this component.
  styleUrls: ['./app.component.css'] // StyleUrls: Specifies the location of the CSS file(s) for styling this component.
})


// AppComponent class: Represents the root component of the Angular application.
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts it'),    
  ];
  title = 'Coding!!!!';

  listFilter : any = '0';
  

  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter])
  } ;




}

