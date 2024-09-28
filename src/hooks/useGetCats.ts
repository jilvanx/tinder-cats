import { useQuery } from '@tanstack/react-query';

import { Cat } from '@/models';

export const useGetCats = () => {
  return useQuery({
    queryKey: ['cats'],
    queryFn: async () => {
      const response = await fetch(process.env.EXPO_PUBLIC_API_URL!, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.EXPO_PUBLIC_API_KEY!,
        },
      });
      return (await response.json()) as Cat[];
    },
  });
};
