import React from 'react';
import {Helmet} from 'react-helmet';

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome MPF Feed Shop Online',
  description: 'We sell the best products for best Quality',
  keywords:
    'Poultry Feed, Chicks, Animal Feed, Fish Feed and Poultry Equipment',
};

export default Meta;
