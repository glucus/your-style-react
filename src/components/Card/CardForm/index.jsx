import React from 'react';
import PropTypes from 'prop-types';
import './CardForm.scss';

const CardForm = (props) => {

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

CardForm.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardForm;
