import React from 'react';
import { connect} from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ directory }) =>  (
    
    <div className="directory-menu">
        {
            directory.map(({id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))
        }
    </div>
);

const mapStateToProps = (state) => ({
  directory: state.directory.sections
});

export default connect(mapStateToProps)(Directory);