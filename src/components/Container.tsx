import { Box } from './Box';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box flex={1} padding="ml_24">
      {children}
    </Box>
  );
};
