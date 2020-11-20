import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../redux/actions';

const { VISIBILITY_FILTERS } = require("../constants")
const VisibilityFilters = ({activeFilter, setFilter}) => {
    return (
        <div>
            { Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];

                return (
                    <span style={{padding: 10 + 'px'}} key={`visibility-filter-${currentFilter}`}
                        onClick={() => setFilter(currentFilter)}>
                            {currentFilter}
                    </span>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => { return {activeFilter: state.visibilityFilter}};

export default connect(mapStateToProps, {setFilter})(VisibilityFilters);