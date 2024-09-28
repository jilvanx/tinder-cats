import { useQuery } from '@tanstack/react-query';

export type VoteType = 'upvote' | 'downvote';

type UsePostProps = {
  image_id: string;
  voteType: VoteType | null;
};

type ResponseVote = {
  message: string;
  id: number;
  image_id: string;
  value: number;
  country_code: string;
};

export const useVote = ({ image_id, voteType }: UsePostProps) => {
  return useQuery({
    queryKey: [image_id, voteType],
    queryFn: async () => {
      const response = await fetch(process.env.EXPO_PUBLIC_API_URL_VOTE!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.EXPO_PUBLIC_API_KEY!,
        },
        body: JSON.stringify({
          image_id,
          value: voteType === 'upvote' ? 1 : -1,
        }),
      });
      return (await response.json()) as ResponseVote;
    },
    enabled: !!voteType,
  });
};
