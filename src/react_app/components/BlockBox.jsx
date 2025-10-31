// BlockBox.jsx
import { Box, useStyleConfig } from "@chakra-ui/react";

function BlockBox(props) {
  const { children, ...rest } = props;
  const styles = useStyleConfig("BlockBox", props);

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default BlockBox;
