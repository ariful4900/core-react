import React from 'react'
import SearchPanel from './search-panel'
import PropTypes from 'prop-types'

const Controller = ({ term, handleSearch, toggleForm }) => {
    return (
        <div>
            <SearchPanel term={term} handleSearch={handleSearch} toggleForm={toggleForm} />
        </div>
    )
}

Controller.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default Controller
