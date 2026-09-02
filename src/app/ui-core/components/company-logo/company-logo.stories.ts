import { Meta, IStory, StoryObj } from '@storybook/angular';
import { CompanyLogo } from './company-logo';

const meta: Meta<CompanyLogo> = {
  title: 'UI Core/Components/companylogo',
  component: CompanyLogo,  
} 

export default meta;

type Story = StoryObj<CompanyLogo>; 

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