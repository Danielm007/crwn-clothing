import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { PreviewCollection } from "../preview-collection/preview-collection.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map((col) => (
      <PreviewCollection key={col.id} {...col} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
