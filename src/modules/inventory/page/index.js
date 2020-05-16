import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { getObjectType } from '../selector/index.selector';
import { addInventory } from '../actions'
import uniqid from 'uniqid';

class InventoryPageComponent extends PureComponent {
  _handleAddTypes = () => {
    const { addInventory } = this.props;
    const id = uniqid();
    addInventory(id);
  }

  render() {
    const { className, objectType } = this.props;
    console.log('objectType', objectType)
    return (
      <div className={className}>
        <div className={"action--strip"}>
          <Button variant="primary" onClick={this._handleAddTypes}>Add Type</Button>
        </div>
        <div className="object-type">

        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = (state, {match}) => {
  const id = match.params.id;
  const objectType = getObjectType(state, id)
  return {
    objectType
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addInventory
    },
    dispatch
  );
};

export const InventoryPage =  styled(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(InventoryPageComponent))
)`
  .action--strip {
    height: 50px;
    background-color: #dedede;
    border-bottom: solid 1px #b9b9b9;
    display: flex;
    align-items: center;
    padding:0 10px;
    text-align: right;
    justify-content: flex-end;
  }
  .object-type {  
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  
`;
