import React  from 'react';
import styled from 'styled-components';
import BlockIcon from '@material-ui/icons/Block';

const Permission = ({ className }) => {
  return (
    <div className={className}>
      <div className="content-box">
        <BlockIcon />
        <h3>Un Oh!</h3>
        <p>You shouldn&apos;t be landing here!</p>
      </div>
    </div>
  );
};

Permission.defaultProps = {
  className: ''
};

export const PermissionDenied = styled(Permission)`
  height: 100%;
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 25px;
      margin: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;
