import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#f3b712',
    colorSplit: '#F3F3F3',
  },
  components: {
    Input: {
      activeBorderColor: '#f3b712',
      hoverBorderColor: '#f3b712',
    },
    Button: {
      colorPrimary: '#f3b712',
    },
  },
};

export default theme;
