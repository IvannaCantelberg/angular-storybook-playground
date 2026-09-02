import type { Meta, StoryObj } from '@storybook/angular';
import { SearchPage } from './search-page';


const meta: Meta<SearchPage> = {
  title: 'Pages/Search page',
  component: SearchPage,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
}; 


export default meta;
type Story = StoryObj<SearchPage>; 

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