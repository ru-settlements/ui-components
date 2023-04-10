export const parameters = {
  viewport: {
    viewports: {
      BiggerMobile: {
        name: 'BiggerMobile',
        styles: {
          width: '400px',
          height: '801px',
        },
      },
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
