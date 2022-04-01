import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { ArrowDownIcon, EarthIcon, MoonIcon } from './index';

export default {
  title: 'Core/Icon',
} as Meta;

const LineStyled = styled.div`
  display: flex;
  margin-bottom:15px;
  .description{
    font-size: 12px;
    margin-left: 10px;
    color: #777;
    border: solid 1px #ccc;
    padding: 0 5px;
    width: 300px;
  }
`

const Template: Story<{}> = (args) => {
  return (
    <div>
      <LineStyled>
        <ArrowDownIcon />
        <div className='description'>{`import {ArrowDownIcon} from '@difx/icon`}</div>
      </LineStyled>
      <LineStyled>
        <MoonIcon />
        <div className='description'>{`import {MoonIcon} from '@difx/icon`}</div>
      </LineStyled>
      <LineStyled>
        <EarthIcon />
        <div className='description'>{`import {EarthIcon} from '@difx/icon`}</div>
      </LineStyled>

    </div>
  )
}

export const Primary = Template.bind({});
Primary.args = {};
