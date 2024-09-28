import { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Icon, IconName } from './Icon';

import { makeStyles } from '@/theme';

type ButtonProps = {
  iconName: IconName;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ iconName, ...touchableProps }, ref) => {
    const styles = useStyles();

    return (
      <TouchableOpacity ref={ref} {...touchableProps} style={[styles.button, touchableProps.style]}>
        <Icon name={iconName} />
      </TouchableOpacity>
    );
  }
);

const useStyles = makeStyles((theme) => ({
  button: {
    width: 54,
    height: 54,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadii.xl_32,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.spacing.m_16,
    shadowColor: theme.colors.black,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
}));
