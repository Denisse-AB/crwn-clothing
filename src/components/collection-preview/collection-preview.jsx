import React from "react";
import CollectionItem from "../collection-item/collection-item";

import '../collection-preview/collection-preview.scss';


const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
      .filter((_item, indx) => indx < 4)
      .map(({id, ...otherItemProps}) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;