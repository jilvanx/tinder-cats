import { Box } from './Box';
import { EditScreenInfo } from './EditScreenInfo';
import { Text } from './Text';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>{title}</Text>
      <Box height={1} marginVertical="l_32" width="80%" backgroundColor="gray2" />
      <EditScreenInfo path={path} />
      {children}
    </Box>
  );
};
