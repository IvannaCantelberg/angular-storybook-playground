import type { Meta, StoryObj } from '@storybook/angular';

import {  HeaderTest } from './header';

const meta: Meta<HeaderTest> = {
  title: 'Layout/Header',
  component: HeaderTest,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
}; 


export default meta;
type Story = StoryObj<HeaderTest>; 

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