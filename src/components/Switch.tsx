import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Box } from './Box';
import { Icon } from './icon/Icon';

import { makeStyles, theme } from '@/theme';

export const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const styles = useStyles();

  return (
    <Box style={styles.container}>
      <TouchableOpacity
        style={[
          styles.outter,
          isEnabled
            ? { justifyContent: 'flex-end', backgroundColor: theme.colors.pink }
            : { justifyContent: 'flex-start' },
        ]}
        activeOpacity={0.8}
        onPress={() => setIsEnabled(!isEnabled)}>
        {isEnabled ? (
          <>
            <Box style={styles.innerOff} width={50} height={30}>
              <Icon name="tinder-cats" color="gray2" />
            </Box>
            <Box style={styles.inner} width={50} height={30}>
              <Icon name="star" />
            </Box>
          </>
        ) : (
          <>
            <Box style={styles.inner} width={50} height={30}>
              <Icon name="tinder-cats" />
            </Box>
            <Box style={styles.innerOff} width={50} height={30}>
              <Icon name="star" />
            </Box>
          </>
        )}
      </TouchableOpacity>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outter: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 84,
    height: 28,
    backgroundColor: theme.colors.gray2,
    borderRadius: 28,
    paddingHorizontal: 2,
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 24,
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
  innerOff: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 24,
  },
}));
