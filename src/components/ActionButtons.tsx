import { useState } from 'react';

import { Box } from './Box';
import { Button } from './Button';

import { useVote, VoteType } from '@/hooks/useVote';

type ActionButtonsProps = {
  image_id: string;
  refetchCats: () => void;
};

export const ActionButtons = ({ image_id, refetchCats }: ActionButtonsProps) => {
  const [voteType, setVoteType] = useState<VoteType | null>(null);
  const { data, isLoading } = useVote({
    voteType,
    image_id,
  });

  if (data?.message === 'SUCCESS') {
    refetchCats();
    setVoteType(null);
  }

  return (
    <Box justifyContent="center" flexDirection="row" gap="xl_48" paddingTop="xl_48">
      <Button iconName="close" disabled={isLoading} onPress={() => setVoteType('downvote')} />
      <Button iconName="heart" disabled={isLoading} onPress={() => setVoteType('upvote')} />
    </Box>
  );
};
