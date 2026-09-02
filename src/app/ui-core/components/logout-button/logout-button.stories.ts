import type { Meta, StoryObj } from '@storybook/angular';
import { LogoutButton } from './logout-button';



const meta: Meta<LogoutButton> = {
  title: 'UI Core/Components/logout-button',
  component: LogoutButton,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
}; 


export default meta;
type Story = StoryObj<LogoutButton>; 

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