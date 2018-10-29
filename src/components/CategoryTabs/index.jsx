import React from 'react';
import './CategoryTabs.scss';
import { Consumer } from '../../context';

const CategoryTabs = () => {


  return (
    <Consumer>
      {value => {

        const { categories, categoryName, dispatch } = value;
        const isSelected = category => category.name === categoryName;

        const selectCategory = (categoryName, categoryDescription) => {
          dispatch ({
            type: 'SELECT_CATEGORY',
            payload: { categoryName, categoryDescription }
          })
        };
        
        return (
          <div className="categoryTabs">
          {categories && categories.map (
            category => <button key={category.id}
                                onClick = {selectCategory.bind (this, category.name, category.description) }
                                className={isSelected(category) ? "selected" : "unselected" }>
                            {category.description}
                        </button>
          )}
          </div>
        );
        }
      }
    </Consumer>
  );
};

export default CategoryTabs;