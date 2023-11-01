import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tags';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  // The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component.
  @Input()
  foodPageTags?: string[];
  tags?: Tag[];

  @Input()
  justifyContent: string = 'center';

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this.foodService.getAllTags();
  }
}
