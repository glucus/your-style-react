import React from 'react';
import './CategoryTabs.scss';

const CategoryTabs = (props) => {

  const { categories, handleClick, categoryName } = props;

  const isSelected = category => category.name === categoryName;

  return (
    <div className="categoryTabs">
      {categories && categories.map (
        category => <button key={category.id}
                            onClick = {handleClick.bind (this, category.name, category.description) }
                            className={isSelected(category) ? "selected" : "unselected" }
                    >
                        {category.description}
                    </button>
      )}
      </div>
  );
};

export default CategoryTabs;