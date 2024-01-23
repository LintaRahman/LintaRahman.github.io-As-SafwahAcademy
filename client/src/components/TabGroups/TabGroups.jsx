import React, { useState } from 'react';
import styled from 'styled-components';
import './TabGroups.css';
import Table from '../Table/Table';
const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.9;
  background: #1c4943;
  color: white;
  border-bottom: 2px solid white;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border: 0;
    opacity: 1;
  `}
  @media only screen and (max-width: 600px) {
    border-bottom: 0;
    ${({ active }) =>
    active &&
    `
    border: 2px solid #1c4943;
    opacity: 1;
  `}
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const TabGroup = ({ types }) => {
  const [active, setActive] = useState(types[0].Lesson);

  return (
    <>
      <div className="tabcontainer">
        <ButtonGroup>
          {types.map((type) => (
            <Tab
              key={type.Lesson}
              active={active === type.Lesson}
              onClick={() => setActive(type.Lesson)}
            >
              {type.Lesson}
            </Tab>
          ))}
        </ButtonGroup>
        <p />
        {/* <p> Content about: {active} </p> */}
        {types.map(
          (type) =>
            active === type.Lesson && (
              <div className="tabcontent" key={type.Lesson + "-content"}>
                <p>{type.Summary}</p>
                <Table Data={type.Content}/>
                </div>
            )
        )}
      </div>
    </>
  );
};

export default TabGroup;