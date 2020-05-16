import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import uniqid from 'uniqid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addObjectType } from '../actions'
import { getCurrentCampaignsPage } from '../selectors/index.selector';
import { MangeTypeForm } from '../components/Manage-types.form.component';


class MangeTypesPageComponent extends PureComponent {

  _handleAddTypes = () => {
    const { addObjectType } = this.props;
    const id = uniqid();
    addObjectType(id);
  }

  render() {
    const { className, objectTypes } = this.props;
    return (
      <div className={className}>
        <Row className={"action--strip justify-content-end"}>
          <Col xs={1}>
            <Button variant="primary" onClick={this._handleAddTypes}>Add Type</Button>
          </Col>
        </Row>
        <div className="object-type">
            {objectTypes.map((datum) => {
              return (
                  <MangeTypeForm
                    data={datum}
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
  const objectTypes = getCurrentCampaignsPage(state);
  return {
    objectTypes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addObjectType
    },
    dispatch
  );
};

export const MangeTypesPage =  styled(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MangeTypesPageComponent)
)`
  .action--strip {
    height: 50px;
    background-color: #dedede;
    border-bottom: solid 1px #b9b9b9;
    display: flex;
    align-items: center;
  }
  .object-type {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  
`;
