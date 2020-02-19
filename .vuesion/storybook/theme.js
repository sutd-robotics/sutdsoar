import { create } from '@storybook/theming';
import theme from './_theme.scss';

export default create({
  ...theme,
  brandTitle: 'SUTD Organisation of Autonomous Robotics Website',
  brandUrl: 'https://sutdsoar.herokuapp.com',
  brandImage: 'https://sutdsoar.herokuapp.com/logo.svg',
});
