export const formatTokens = (tokens: number): string => {
  return tokens.toLocaleString();
};

export const calculateCost = (tokens: number): number => {
  // Cost per 1K tokens (example rate)
  const ratePerThousand = 0.002;
  return (tokens / 1000) * ratePerThousand;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 4,
  }).format(amount);
};