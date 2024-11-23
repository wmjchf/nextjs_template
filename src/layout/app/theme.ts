import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
} from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        // borderColor: "#333", // 替换为你的颜色
        fontSize: "100px",
      },
      defaultProps: {
        colorScheme: "blue",
      },
    },
    // Input: {
    //   baseStyle: {
    //     borderRadius: "100px",
    //   },
    // },
  },
});

export default theme;
