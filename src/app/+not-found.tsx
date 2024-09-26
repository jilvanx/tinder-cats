import { Link, Stack } from 'expo-router';

import { Box } from '@/components/Box';
import { Text } from '@/components/Text';
import { makeStyles } from '@/theme';

export default function NotFoundScreen() {
  const styles = useStyles();

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Box flex={1} justifyContent="center" alignItems="center" padding="ml_24">
        <Text>This screen doesn't exist.</Text>
        <Text variant="subTitle">Sub TitleThis screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text variant="body" color="green">
            Go to home screen!
          </Text>
        </Link>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  link: {
    marginTop: theme.spacing.m_16,
    paddingVertical: theme.spacing.m_16,
  },
}));
