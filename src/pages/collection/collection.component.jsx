import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import  './collection.styles.scss';

const CollectionPage = ({ match, collections }) => {
    const COLLECTION_ID_MAP = {
        hats: 1,
        sneakers: 2,
        jackets: 3,
        womens: 4,
        mens: 5
    }

    return (
        <div className="collection-page">
            <h2>Category Page</h2>
            <div className="title">{match.params.collectionId.toUpperCase()}</div>
            <div className="items">
                {
                    collections.filter((collection) => collection.id === COLLECTION_ID_MAP[match.params.collectionId]).map(
                    (item) => item.items.map((item) => <CollectionItem key={item.id} item={item} />))
                    
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    collections: state.shop
});

export default connect(mapStateToProps)(CollectionPage);
