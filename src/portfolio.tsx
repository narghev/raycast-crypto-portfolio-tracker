import { usePortfolio } from "./hooks/usePortfolio";

export default function Command() {
  const { portfolio } = usePortfolio();

  console.log({ portfolio: JSON.stringify(portfolio) });

  return null;
}
