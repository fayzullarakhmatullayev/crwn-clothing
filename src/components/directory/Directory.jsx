import React from "react";
import MenuItem from "../menu-item/MenuItem.jsx";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

const Directory = ({ sections }) => (
  <DirectoryMenu>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenu>
);

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
