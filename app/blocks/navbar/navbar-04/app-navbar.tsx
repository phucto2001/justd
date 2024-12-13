"use client"

import {
  IconBrandApple,
  IconCommandRegular,
  IconDashboard,
  IconHeadphones,
  IconLogout,
  IconSettings,
  IconShield,
  IconShoppingBag,
} from "justd-icons"
import { Avatar, Button, Menu, Navbar, Separator } from "ui"

export default function AppNavbar() {
  return (
    <Navbar>
      <Navbar.Nav>
        <Navbar.Logo href="/docs/components/layouts/navbar">
          <IconBrandApple className="size-6 sm:size-5" />
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item href="#">Enabled</Navbar.Item>
          <Navbar.Item isDisabled href="#">
            Disabled
          </Navbar.Item>
        </Navbar.Section>
      </Navbar.Nav>

      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6 sm:mx-1" />
          <Navbar.Logo href="/docs/components/layouts/navbar">
            <IconBrandApple className="size-5" />
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex>
          <Navbar.Flex>
            <Button appearance="plain" size="square-petite" aria-label="Your Bag">
              <IconShoppingBag />
            </Button>
          </Navbar.Flex>
          <Separator orientation="vertical" className="mr-3 ml-1 h-6" />
          <UserMenu />
        </Navbar.Flex>
      </Navbar.Compact>
    </Navbar>
  )
}

function UserMenu() {
  return (
    <Menu>
      <Menu.Trigger aria-label="Open Menu">
        <Avatar alt="cobain" size="small" shape="square" src="/images/avatar/cobain.jpg" />
      </Menu.Trigger>
      <Menu.Content placement="bottom right" className="sm:min-w-56">
        <Menu.Section>
          <Menu.Header separator>
            <span className="block">Kurt Cobain</span>
            <span className="font-normal text-muted-fg">@cobain</span>
          </Menu.Header>
        </Menu.Section>

        <Menu.Item href="#dashboard">
          <IconDashboard />
          Dashboard
        </Menu.Item>
        <Menu.Item href="#settings">
          <IconSettings />
          Settings
        </Menu.Item>
        <Menu.Item href="#security">
          <IconShield />
          Security
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item>
          <IconCommandRegular />
          Command Menu
        </Menu.Item>

        <Menu.Item href="#contact">
          <IconHeadphones />
          Customer Support
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item href="#logout">
          <IconLogout />
          Log out
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
