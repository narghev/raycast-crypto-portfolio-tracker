import { List } from "@raycast/api";
import { usePortfolio } from "./hooks/usePortfolio";
import { supportedTokens, tokenDisplayProperties } from "./util/tokens";

export default function Command() {
  const { portfolio, isLoading } = usePortfolio();

  return (
    <List isLoading={isLoading} searchBarPlaceholder="Search addresses..." isShowingDetail>
      {supportedTokens.map((token) => {
        const portfolioToken = portfolio[token];
        const entries = Object.entries(portfolioToken);
        const tokenDisplay = tokenDisplayProperties[token];

        return (
          <List.Section
            key={token}
            title={tokenDisplay.name}
            subtitle={`${entries.length.toString()} address${entries.length !== 1 ? "es" : ""}`}
          >
            {entries.map(([address, addressInfo]) => (
              <List.Item key={address} title={addressInfo.name} icon={{ source: tokenDisplay.image }} />
            ))}
          </List.Section>
        );
      })}
    </List>
  );
}
