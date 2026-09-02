import { Meta, IStory, StoryObj } from '@storybook/angular';
import { DatePicker } from './date-picker';

const meta: Meta<DatePicker> = {
  title: 'UI Core/Components/date-picker',
  component: DatePicker,  
} 

export default meta;

type Story = StoryObj<DatePicker>; 

export const Default: Story = {
  args: {
    // your component props
  },
};
