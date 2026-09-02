import { Meta, IStory, StoryObj } from '@storybook/angular';
import { ArchivesFilter } from './archives-filter';

const meta: Meta<ArchivesFilter> = {
  title: 'UI Core/Components/archives-filter',
  component: ArchivesFilter,  
} 

export default meta;

type Story = StoryObj<ArchivesFilter>; 

export const Default: Story = {
  args: {
    // your component props
  },
};
