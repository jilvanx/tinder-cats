import { Box } from './Box';
import { Container } from './Container';
import { Text } from './Text';

type ScreenContentProps = {
  title: string;
};

export const ScreenContent = ({ title }: ScreenContentProps) => {
  return (
    <Container spacing="xxxl_96">
      <Box flex={1} alignItems="center">
        <Text variant="big">{title}</Text>
      </Box>
    </Container>
  );
};
