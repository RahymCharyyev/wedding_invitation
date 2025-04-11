import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#4eb39d',
    colorSplit: '#F3F3F3',
  },
  components: {
    Input: {
      activeBorderColor: '#4eb39d',
      hoverBorderColor: '#4eb39d',
    },
    Button: {
      colorPrimary: '#4eb39d',
    },
  },
};

export default theme;
