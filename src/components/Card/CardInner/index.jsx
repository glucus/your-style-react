import React from 'react';
import PropTypes from 'prop-types';
import './CardInner.scss';

const CardInner = (props) => {

  const { card } = props;

  return (
    <div className="card">
        {card && <div className="card-info">
          <img className="thumbnail" src={card.image} alt='' />
          <h4>{card.name}</h4>
          <div>{card.description}</div>
        </div>}
    </div>
  );
}

CardInner.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardInner;
