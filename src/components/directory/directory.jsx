import React from "react";
import MenuItem from '../menu-item/menu-item';

import { connect } from 'react-redux';

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from '../../redux/directory/directory-selector';

import '../directory/directory.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateProps)(Directory);