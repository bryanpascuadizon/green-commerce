import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

//CSS
import '../../assets/layout/pageName.css'

const PageName = ({ pageName }) => {
 

  return <div className="page-name">{pageName}</div>;
};

PageName.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default PageName;
