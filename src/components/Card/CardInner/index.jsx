import React from 'react';
import PropTypes from 'prop-types';
import './CardInner.scss';

const CardInner = (props) => {

  const { card } = props;

  return (
    <React.Fragment>
        {card && <div className="card-info">
          <img className="thumbnail" src={card.image} alt='' />
          <h4>{card.name}</h4>
          <div>{card.description}</div>
        </div>}
    </React.Fragment>
  );
}

CardInner.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardInner;
