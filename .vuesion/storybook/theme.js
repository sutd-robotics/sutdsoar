import { create } from '@storybook/theming';
import theme from './_theme.scss';

export default create({
  ...theme,
  brandTitle: 'SUTD Organisation of Autonomous Robotics Website',
  brandUrl: 'https://soar.opensutd.org',
  brandImage: 'https://soar.opensutd.org/logo-colored.svg',
});
