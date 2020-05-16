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
import uniqid from 'uniqid';
import { Input, Label, Select } from "../../../common/components";
import { modifyObjectTypeValues, addObjectFieldType } from "../actions";
import { INPUT_TYPE_ENUM } from '../../../constant';
import { getFieldList } from '../selectors/index.selector';


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
   modifyObjectTypeValues,
   data
 }) => {

  const _handleObjectStaticFields = (name, value) => {
    const { id } = data;
    modifyObjectTypeValues({id, name, value})
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} className={"field-row"}>
              <Label>Object Type</Label>
              <Input value={values.objectType} onChange={ (e) => _handleObjectStaticFields('name', e.target.value)} />
          </Col>
          <Col xs={12} className={"field-row"}>
              <Label>Object Title</Label>
              <Select>
                {values.fields.map((datum) => {
                  return (
                    <option key={datum.id} value={datum.id}>{datum.name}</option>
                  )
                })}
              </Select>
          </Col>
          <Col xs={12} className={"field-row"}>
            <Label>Fields</Label>
            <FieldArray
              name="fields"
              render={() => (
                <div>
                  {values.fields.map((datum ) => (
                    <Input value={datum.name} key={datum.id} />
                  ))}
                </div>
              )}
            />
          </Col>
          <Col xs={12} className={"field-row"}>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Add Field
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

class MangeTypeFormComponent extends PureComponent {

  componentDidMount(){
    this._handleObjectFieldType();
  }

  _handleObjectFieldType = () => {
    const { data, addObjectFieldType } = this.props;
    const id = uniqid();
    addObjectFieldType({objectTypeId: data.id, id, inputType: INPUT_TYPE_ENUM.SMALL_TEXT, name: 'Title' })
  }


  _onFilterFormSubmit(
    values,
    actions
  ) {

  }

  render() {
    const { className, data, fields } = this.props;
    const { name } = data;
    return (
        <div className={className}>
          <h4>{name}</h4>
          <Formik
          enableReinitialize
          initialValues={{
            objectType: name,
            objectTitle: "",
            fields: fields
          }}
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
  const fields = getFieldList(state, props.data.id);
  return {
    fields
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      modifyObjectTypeValues,
      addObjectFieldType
    },
    dispatch
  );
};

export const MangeTypeForm = styled(
  connect(mapStateToProps, mapDispatchToProps)(MangeTypeFormComponent)
)`
  width: 300px;
  border: solid 1px #ccc;
  border-radius: 4px;
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
`;
