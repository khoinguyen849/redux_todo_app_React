import React from "react";
import { connect } from "react-redux";
import {
  setFilter,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../actions/todoActions";
import "./FilterButtons.css";

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter,
});
const mapDispatchToProps = {
  setFilter,
};
const FilterButtons = ({ currentFilter,setFilter }) => {
  /*
const currentFilter = useSelector(state => state.visibilityFilter);
*/

  const filterButtons = [
    { filter: SHOW_ALL, label: "All" },
    { filter: SHOW_ACTIVE, label: "Active" },
    { filter: SHOW_COMPLETED, label: "Completed" },
  ];

  return (
    <div className="filter-buttons">
      <h4 className="filter-title">Show:</h4>
      <div className="filter-button-group">
        {filterButtons.map(({ filter, label }) => (
          <button
            key={filter}
            onClick={() => setFilter(filter)}
            className={`filter-button ${
              currentFilter === filter ? "active" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(FilterButtons);
