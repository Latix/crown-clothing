import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../preview-collection/preview-collection.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map((collection) => (
                <CollectionPreview key={collection.id} collections={collection}/>
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    collections: state.shop
});

export default connect(mapStateToProps)(CollectionsOverview);