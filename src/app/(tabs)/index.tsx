import { useState } from 'react';

import { Box } from '@/components/Box';
import { Container } from '@/components/Container';
import { Switch } from '@/components/Switch';
import { Icon } from '@/components/icon/Icon';
import { makeStyles } from '@/theme';

export default function Home() {
  const [isEnabled, setIsEnabled] = useState(false);

  const styles = useStyles();

  return (
    <Container>
      <Box>
        <Icon name="cat" color="black" />
        <Switch />
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  switch: {
    width: 84,
    height: 28,
    radius: theme.borderRadii.xl_28,
  },
}));
