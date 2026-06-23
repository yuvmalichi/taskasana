import { memo, type PropsWithChildren, type Ref, useMemo } from 'react';
import { Flex, type FlexProps } from '@/components/ui/flex';
import { transitions } from '@/styles/transitions';
import { useTaskFeedListItemContext } from './Provider';
import { useFeedListItemContainerContext } from './Provider/ProviderContainer';

type Props = PropsWithChildren;

export const Container = memo<Props>(function Container(props) {
  const { taskFeed, isPinned } = useTaskFeedListItemContext();
  const { containerRef, isReferenced } = useFeedListItemContainerContext();

  const style = useMemo((): FlexProps => {
    if (isReferenced)
      return {
        bg: 'yellow.100',
      };

    if (isPinned)
      return {
        bg: 'yellow.50',
      };

    return taskFeed.isPinned
      ? {
          borderLeft: 3,
          borderColor: 'yellow.300',
          borderLeftStyle: 'solid',
          bg: 'bg.subtle',
        }
      : {
          bg: 'bg.subtle',
        };
  }, [taskFeed.isPinned, isPinned, isReferenced]);

  return (
    <Flex
      {...style}
      ref={containerRef as Ref<HTMLDivElement>}
      px={6}
      py={2}
      flexDirection="column"
      transition={transitions.base()}
      {...props}
    />
  );
});
