import { UserConfig } from 'vite';

import { StorybookConfig } from '@analogjs/storybook-angular';
import { StorybookConfigVite } from '@storybook/builder-vite';

const config: StorybookConfig & StorybookConfigVite= {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", 
    "../src/app/ui-core/layout/header/header-test.stories.ts" 
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  framework: {
    name: '@analogjs/storybook-angular',
    options: {},
  },
  
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: undefined,
      },
    },
  },
  
   async viteFinal(config: UserConfig) {
     const { mergeConfig } = await import('vite');
    const { default: angular } = await import('@analogjs/vite-plugin-angular');
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          '@storybook/angular',
          '@angular/compiler',
          '@storybook/blocks',
          'tslib',
          'zone.js', // Add zone.js here
        ],
      },
      plugins: [angular({ jit: true, tsconfig: './.storybook/tsconfig.json' })],
    });
  },
};
export default config;