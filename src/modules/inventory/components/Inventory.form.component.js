import React, {
  PureComponent,
} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Formik, FieldArray } from 'formik';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClearIcon from '@material-ui/icons/Clear';
import uniqid from 'uniqid';
import { Input, Label, Select } from "../../../common/components";
import { INPUT_TYPE_ENUM, INPUT_TYPE_ENUM_VALUE } from '../../../constant';



export const FormikForm = ({
   values,
   errors,
   isValid,
   dirty,
   touched,
   setFieldValue,
   setFieldTouched,
   initialValues,
   handleSubmit,
   data,
   objectType
 }) => {
  const fields = data.fields;
  console.log(fields)
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          {fields.map((datum) => {
            console.log('datum', datum)
            return (
              <Col key={datum.id} xs={12} className={"field-row"}>
                <Label>{datum.name}</Label>
                <Input value={datum.value} />
              </Col>
            )
          })}
        </Row>
      </form>
    </Container>
  );
};

class InventoryTypeFormComponent extends PureComponent {

  _onFilterFormSubmit(
    values,
    actions
  ) {

  }

  render() {
    const { className, data, objectType } = this.props;
    const { title, id, fields } = data;
    const { titleFieldId } = objectType;
    const titlePartFromFieldValue = fields.find((datum) => { return datum.id === titleFieldId})?.value ?? '';
    return (
      <div className={className}>
        <h4>{`${title} - ${titlePartFromFieldValue}`}</h4>
        <button className="close-btn">
          <ClearIcon />
        </button>
        <Formik
          enableReinitialize
          onSubmit={(
            values,
            actions
          ) => {
            this._onFilterFormSubmit(values, actions);
          }}
          render={(formikProps) => {
            return (
              <FormikForm
                {...formikProps}
                {...this.props}
                {...this.state}
              />
            );
          }}
        />
      </div>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = (state, props) => {
  //const fields = getFieldList(state, props.data.id);
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
    },
    dispatch
  );
};

export const InventoryTypeForm = styled(
  connect(mapStateToProps, mapDispatchToProps)(InventoryTypeFormComponent)
)`
  width: 300px;
  border: solid 1px #ccc;
  margin-right: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
  padding-bottom: 10px;
  .field-row {
    margin-bottom: 10px;
  }
  h4 {
    min-height: 40px;
    background: #f7f7f7;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin-bottom: 15px;
    font-size: 16px;
    padding: 10px;
    border-bottom: solid 1px #ccc;
    word-break: break-all;
    padding-right: 30px;
  }
  .action-dropdown {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  .input-col {
    float: left;
    width: 60%;
  }
  .dropdown-col {
    float: left;
    width: 40%;
    button {
     width: 100%;
    }
  }
  .close-btn {
    position: absolute;
    top: 6px;
    right: 6px;
    background: transparent;
    border: none;
  }
`;
