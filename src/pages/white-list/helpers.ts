import useSWR from 'swr';
import customAxios from 'utils/customAxios';

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export const register = (address: string) => {
  return customAxios.post(`${API_HOST}/whitelist/register`, {
    walletAddress: address,
  });
};

export const useCheckIsRegistered = (address?: string | null) => {
  const url = address ? `${API_HOST}/whitelist/isRegistered?walletAddress=${address}` : null;
  const { data, error, isValidating, mutate } = useSWR(url, () =>
    customAxios.get(url as string).then((response) => response.data)
  );
  let isRegistered;
  if (data) {
    isRegistered = data.data.isRegistered;
  }
  return {
    isRegistered,
    error,
    isLoading: isValidating,
    mutate,
  };
};

export const getCountdownString = ({
  days = 0,
  hours,
  minutes,
  seconds,
}: {
  days?: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  const pad = (num: number) => String(num).padStart(2, '0');
  const daysStr = `${days} day${days === 1 ? '' : 's'}`;
  return `${daysStr}, ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};
