import React from 'react';

const CategoryTabs = (props) => {

  const { categories, handleClick } = props;

  return (
    <React.Fragment>
      {categories && categories.map (
        category => <button key={category.id}
                            data-name={category.name}
                            data-description={category.description}
                            onClick = {handleClick.bind (this, category.name, category.description) }>
                        {category.description}
                    </button>
      )}
      </React.Fragment>
  );
};

export default CategoryTabs;