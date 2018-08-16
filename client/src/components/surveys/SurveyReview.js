import React from 'react';

const SurveyReview = props => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="yellow darken-3 btn-flat" onClick={props.onCancel}>
        Back
      </button>
    </div>
  );
};

export default SurveyReview;
