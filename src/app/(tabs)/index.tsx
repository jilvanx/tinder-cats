import { Image } from 'expo-image';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { ActionButtons } from '@/components/ActionButtons';
import { Box } from '@/components/Box';
import { Container } from '@/components/Container';
import { Switch } from '@/components/Switch';
import { Text } from '@/components/Text';
import { blurhash } from '@/constants';
import { useGetCats } from '@/hooks/useGetCats';
import { makeStyles, theme } from '@/theme';

export default function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  const styles = useStyles();

  const { data: cats, isError, isLoading, refetch: refetchCats } = useGetCats();

  if (isError) {
    return (
      <Container>
        <Box flex={1} justifyContent="center">
          <Text variant="title">Something went wrong</Text>
        </Box>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <Box flex={1} justifyContent="center">
          <ActivityIndicator size="large" color={theme.colors.pink} />
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box>
        <Switch value={isEnabled} onValueChange={setIsEnabled} />
      </Box>

      <Box marginVertical="l_32" />

      <Box alignItems="center">
        <Image
          source={{ uri: cats?.[0].url }}
          style={styles.image}
          placeholder={{ blurhash }}
          transition={{ duration: 300 }}
        />
      </Box>

      <Box
        marginTop="n_xl_46"
        marginHorizontal="m_20"
        borderTopLeftRadius="m_16"
        borderTopRightRadius="m_16"
        backgroundColor="white"
        paddingHorizontal="m_16"
        paddingVertical="s_8">
        <Box flexDirection="row" justifyContent="space-between">
          <Text variant="title">{cats?.[0].breeds[0]?.name ?? 'No information'}</Text>
          <Text variant="title">{cats?.[0].breeds[0]?.dog_friendly ?? ''}</Text>
        </Box>
        <Box>
          <Text variant="subTitle">{cats?.[0].breeds[0]?.origin ?? 'No information'}</Text>
        </Box>
      </Box>

      <ActionButtons image_id={cats?.[0].id ?? ''} refetchCats={refetchCats} />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  image: {
    width: 343,
    height: 446,
    borderRadius: theme.borderRadii.m_16,
  },
}));
