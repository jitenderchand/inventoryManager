import React  from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderComponent = ({
    className,
  }) => {
  return (
      <div className={className}>
        <h5>Objector</h5>
        <nav className="app-header--navigation">
          <ul>
            <Link to="/types">Manage Types</Link>
          </ul>
        </nav>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export const Header = styled(
  connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
)`
  background-color: #1976d2;
  min-height: 50px;
  display: flex;
  align-items: center;
  color: #fff;  
  padding: 0 10px;
  .app-header--navigation {
    padding-left: 20px;
     a {
        color: #fff;
        text-decoration: underline;
     }
  }
`;
