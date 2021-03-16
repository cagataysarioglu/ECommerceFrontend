import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  dataLoaded = false;
  currentCategory: Category = { categoryId: -1, categoryName: '' };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  removeCurrentCategory() {
    this.currentCategory = { categoryId: -1, categoryName: '' };
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllCategoryClass() {
    let defaultCategory: Category = { categoryId: -1, categoryName: '' };
    if (this.currentCategory.categoryId == defaultCategory.categoryId) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
