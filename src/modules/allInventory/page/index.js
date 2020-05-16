import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import uniqid from 'uniqid';
import { getAllInventories } from '../selector/index.selector';
import { addInventory } from '../../inventory/actions'
import { InventoryTypeForm } from '../components/Inventory.form.component';

class AllInventoryPageComponent extends PureComponent {
  _handleAddTypes = () => {
    const { addInventory, objectType, objectFields } = this.props;
    const id = uniqid();
    const fields = objectFields.map((datum) => {
      return {
          id: datum.id,
          name: datum.name,
          value: datum.value,
          type: datum.inputType
      }
    });
    addInventory({id, objectTypeId: objectType.id, title: objectType.name, fields });
  }

  render() {
    const { className, inventories } = this.props;
    return (
      <div className={className}>
        <div className={"action--strip"}>
          <Button variant="primary" onClick={this._handleAddTypes}>Add Type</Button>
        </div>
        <div className="object-type">
          {inventories.map((datum) => {
            return (
              <InventoryTypeForm
                data={datum}
                key={datum.id}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = (state) => {
  const inventories = getAllInventories(state);
  console.log('inventories', inventories)
  return {
    inventories
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

export const AllInventoryPage =  styled(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(AllInventoryPageComponent))
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
