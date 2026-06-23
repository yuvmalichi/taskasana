import { forwardRef, memo } from 'react';
import { Flex, type FlexProps } from '@/components/ui/flex';
import { Provider } from './Provider';

type Props = FlexProps;

export const TasksCalendar = memo(function TasksCalendar(props: Props) {
  return (
    <Provider>
      <Component {...props} />
    </Provider>
  );
});

const Component = forwardRef<HTMLDivElement, Props>(
  function Component(props, ref) {
    return (
      <Flex
        flex={1}
        h="full"
        flexDirection="column"
        bg="bg.subtle"
        {...props}
        ref={ref}
      />
    );
  },
);
