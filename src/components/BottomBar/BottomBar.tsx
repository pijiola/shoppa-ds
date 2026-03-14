import { FruttinoIcon, CartIcon, ProfileIcon } from "../Icons";
import "./BottomBar.css";

export type BottomBarTab = "Shoppa" | "My list" | "Profile";

export interface BottomBarProps {
  /** Which tab is currently active. Must reflect the current route. */
  active?: BottomBarTab;
  /** Callback fired when a tab is tapped. */
  onTabChange?: (tab: BottomBarTab) => void;
}

const TABS: { key: BottomBarTab; label: string }[] = [
  { key: "Shoppa", label: "ShoppaAI" },
  { key: "My list", label: "My Lists" },
  { key: "Profile", label: "Profile" },
];

function TabIcon({ tab, active }: { tab: BottomBarTab; active: boolean }) {
  const color = active ? "var(--color-brand-orange)" : "var(--color-text-inactive)";

  switch (tab) {
    case "Shoppa":
      return <FruttinoIcon color={color} />;
    case "My list":
      return <CartIcon color={color} />;
    case "Profile":
      return <ProfileIcon color={color} />;
  }
}

/**
 * Primary bottom navigation for the ShoppaAI app.
 *
 * Always displays 3 fixed tabs: ShoppaAI, My Lists, Profile.
 * Exactly one tab must be active at all times.
 */
export function BottomBar({ active = "Shoppa", onTabChange }: BottomBarProps) {
  return (
    <nav className="bottom-bar" role="tablist" aria-label="Main navigation">
      {TABS.map(({ key, label }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            className={`bottom-bar__tab ${isActive ? "bottom-bar__tab--active" : ""}`}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange?.(key)}
          >
            <TabIcon tab={key} active={isActive} />
            <span className="bottom-bar__label">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
