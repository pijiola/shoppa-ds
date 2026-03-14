import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomBar } from "./BottomBar";
import type { BottomBarTab } from "./BottomBar";

const meta = {
  title: "Components/BottomBar",
  component: BottomBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `The primary bottom navigation for the ShoppaAI mobile app. It sits fixed at the bottom of the screen and provides access to the three core sections: ShoppaAI (home), My Lists, and Profile.

## Design Tokens

| Property | Token | Value |
|---|---|---|
| Container padding | \`--space-16\` | 16px |
| Tab padding | \`--space-12\` | 12px |
| Icon-to-label gap | \`--space-4\` | 4px |
| Container height | Fixed | 68px |
| Container width | Full width | 393px |
| Active color | \`--color-brand-orange\` | #F08E19 |
| Inactive color | \`--color-text-inactive\` | #B0B0B0 |
| Label font | Outfit Medium | 14px / 16px |

## Usage Guidelines

**Do:**
- Always show exactly 3 tabs: ShoppaAI, My Lists, Profile
- Keep the BottomBar fixed at the bottom of the viewport
- Always have one active tab that reflects the current screen
- Use the branded Fruttino icon for the ShoppaAI tab

**Don't:**
- Don't add or remove tabs
- Don't allow multiple active tabs simultaneously
- Don't change the tab order
- Don't hide the BottomBar on scroll
- Don't place it on modal or overlay screens
- Don't render with no active tab
`,
      },
    },
    backgrounds: {
      default: "warm",
      values: [
        { name: "warm", value: "#fffaf3" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
} satisfies Meta<typeof BottomBar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default state with ShoppaAI tab active — click tabs to navigate. */
export const Default: Story = {
  render: () => {
    const [active, setActive] = useState<BottomBarTab>("Shoppa");
    const screens: Record<BottomBarTab, string> = {
      Shoppa: "Home",
      "My list": "My Lists",
      Profile: "Profile",
    };
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 32 }}>
        <div
          style={{
            width: 393,
            height: 600,
            background: "#fffaf3",
            borderRadius: 32,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 28,
                fontWeight: 600,
                color: "#d1d5db",
              }}
            >
              {screens[active]}
            </p>
          </div>
          <BottomBar active={active} onTabChange={setActive} />
        </div>
      </div>
    );
  },
};

/** Active state on the My Lists tab. */
export const MyList: Story = {
  render: () => {
    const [active, setActive] = useState<BottomBarTab>("My list");
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 32 }}>
        <BottomBar active={active} onTabChange={setActive} />
      </div>
    );
  },
};

/** Active state on the Profile tab. */
export const Profile: Story = {
  render: () => {
    const [active, setActive] = useState<BottomBarTab>("Profile");
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: 32 }}>
        <BottomBar active={active} onTabChange={setActive} />
      </div>
    );
  },
};

/** All three variants displayed together for comparison. */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: 32 }}>
      <div>
        <p style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, color: "#6b7280", marginBottom: 8 }}>Active=Shoppa</p>
        <BottomBar active="Shoppa" />
      </div>
      <div>
        <p style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, color: "#6b7280", marginBottom: 8 }}>Active=My list</p>
        <BottomBar active="My list" />
      </div>
      <div>
        <p style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, color: "#6b7280", marginBottom: 8 }}>Active=Profile</p>
        <BottomBar active="Profile" />
      </div>
    </div>
  ),
};
