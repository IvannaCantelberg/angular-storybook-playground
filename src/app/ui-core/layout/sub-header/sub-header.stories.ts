import type { Meta, StoryObj } from '@storybook/angular';
import { SubHeader } from './sub-header';


const meta: Meta<SubHeader> = {
  title: 'Layout/SubHeader',
  component: SubHeader,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
}; 


export default meta;
type Story = StoryObj<SubHeader>; 

export const Default: Story = {
  args: {
    // your component props
  },
};

export const AnotherStory: Story = {
  args: {
    // another set of props
  },
};