"use client"

import React, { useState } from "react"

import { ResponsiveAside } from "@/components/responsive-aside"
import { siteConfig } from "@/resources/config/site"
import {
  IconBrandAdobe,
  IconBrandGithub,
  IconBrandJustd,
  IconBrandTailwindcss,
  IconBrandX,
  IconChevronLgDown,
  IconColorPalette,
  IconColors,
  IconCube,
  IconDeviceDesktop,
  IconHome,
  IconMoon,
  IconSearch,
  IconSun,
} from "justd-icons"
import { LayoutGroup } from "motion/react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Collection } from "react-aria-components"
import { Button, buttonStyles, Link, Menu, Separator, useMediaQuery } from "ui"

import { CommandPalette } from "./command-palette"
import { NavLink } from "./nav-item"
import { TakeCurrentUrl } from "./take-current-url"
import { ThemeSwitcher } from "./theme-switcher"

const menuItems = [
  { id: 1, label: "Home", url: "/" },
  { id: 4, label: "Components", url: "/docs/getting-started/introduction" },
]

export function Navbar() {
  const id = React.useId()
  const pathname = usePathname()

  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  return (
    <>
      <CommandPalette setOpen={setOpen} openCmd={open} />
      <LayoutGroup id={`navigation-${id}`}>
        <div className="xnw2 sticky top-0 z-30 hidden overflow-hidden pb-0 lg:block">
          <nav className="border-b bg-bg py-2 backdrop-blur-3xl supports-backdrop-filter:bg-bg/60 dark:bg-bg/95">
            <div className="mx-auto max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-6">
                  <NavbarDropdown />
                  <Separator orientation="vertical" className="h-6" />
                  <Collection items={menuItems}>
                    <NavLink isNextLink isActive={pathname === "/"} href="/">
                      Home
                    </NavLink>
                    <NavLink
                      isNextLink
                      isActive={pathname?.startsWith("/docs") && !pathname?.includes("/docs/components")}
                      href="/docs/getting-started/introduction"
                    >
                      Docs
                    </NavLink>
                    <NavLink
                      isNextLink
                      isActive={pathname?.startsWith("/docs/components") || pathname === "/components"}
                      href="/docs/components/buttons/button"
                    >
                      Components
                    </NavLink>
                    <NavLink isNextLink isActive={pathname === "/charts"} href="/docs/charts/setup">
                      Chart
                    </NavLink>
                    <NavLink isNextLink isActive={pathname === "/blocks"} href="/blocks">
                      Blocks
                    </NavLink>
                    <NavLink isNextLink isActive={pathname === "/icons"} href="/icons">
                      Icons
                    </NavLink>
                    <NavLink isNextLink isActive={pathname === "/colors"} href="/colors">
                      Colors
                    </NavLink>
                    <NavLink isNextLink isActive={pathname === "/themes"} href="/themes">
                      Themes
                    </NavLink>
                  </Collection>
                </div>

                <div className="flex items-center gap-x-1">
                  <>
                    <Button
                      onPress={() => setOpen((open: boolean) => !open)}
                      size="small"
                      appearance="outline"
                      className="h-9"
                      aria-label="Open command palette"
                    >
                      <IconSearch />

                      <span className="text-muted-fg">Search..</span>

                      <Menu.Keyboard className="-mr-2" keys="⌘K" />
                    </Button>
                    <TakeCurrentUrl />
                    <ThemeSwitcher />

                    <Separator orientation="vertical" className="mx-2 h-7" />

                    <Link
                      aria-label="Github Repository"
                      className={buttonStyles({
                        appearance: "outline",
                        size: "square-petite",
                        className: "**:data-[slot=icon]:text-fg",
                      })}
                      target="_blank"
                      href={siteConfig.repo}
                    >
                      <IconBrandGithub />
                    </Link>
                    <Link
                      aria-label="Follow Update on X"
                      className={buttonStyles({
                        appearance: "outline",
                        size: "square-petite",
                        className: "**:data-[slot=icon]:text-fg",
                      })}
                      target="_blank"
                      href="https://x.com/intent/follow?screen_name=irsyadadl"
                    >
                      <IconBrandX />
                    </Link>
                  </>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </LayoutGroup>
      {!isDesktop && <ResponsiveAside openCmd={open} setOpenCmd={setOpen} />}
    </>
  )
}

export function NavbarDropdown() {
  const { theme, setTheme } = useTheme()
  return (
    <Menu>
      <Button aria-label="Menu." appearance="plain" className="group -ml-1">
        <span className="flex items-center gap-x-2">
          <IconBrandJustd className="-ml-1 size-5" />
          <span className="font-mono text-base tracking-tight sm:text-sm">{siteConfig.name}</span>
          <IconChevronLgDown className="-mr-1 ml-3 size-3.5 text-muted-fg transition duration-300 group-hover:text-fg group-data-pressed:rotate-180 group-data-pressed:text-fg" />
          <span className="sr-only">Open menu</span>
        </span>
      </Button>
      <Menu.Content placement="bottom" className="sm:min-w-64">
        <Menu.Section title="Pages">
          <Menu.Item href="/">
            <IconHome />
            Home
          </Menu.Item>
          <Menu.Item href="/components">
            <IconCube />
            Components
          </Menu.Item>
          <Menu.Item href="/colors">
            <IconColors />
            Colors
          </Menu.Item>
          <Menu.Item href="/themes">
            <IconColorPalette />
            Themes
          </Menu.Item>
          <Menu.Item href="/icons">
            <IconBrandJustd />
            Icons
          </Menu.Item>
        </Menu.Section>
        <Menu.Section title="Refs">
          <Menu.Item href="https://x.com/intent/follow?screen_name=irsyadadl" target="_blank">
            <IconBrandX />X / Twitter
          </Menu.Item>
          <Menu.Item href="https://github.com/justdlabs" target="_blank">
            <IconBrandGithub />
            Github
          </Menu.Item>
          <Menu.Item href="https://react-spectrum.adobe.com/react-aria/components.html" target="_blank">
            <IconBrandAdobe />
            RAC
          </Menu.Item>
          <Menu.Item href="https://tailwindcss.com" target="_blank">
            <IconBrandTailwindcss />
            Tailwind CSS
          </Menu.Item>
        </Menu.Section>
        <Menu.Section title="Preferences">
          <Menu.Submenu>
            <Menu.Item>
              {theme === "system" ? <IconDeviceDesktop /> : theme === "dark" ? <IconMoon /> : <IconSun />}
              <span>Switch Theme</span>
            </Menu.Item>
            <Menu.Content>
              <Menu.Item onAction={() => setTheme("system")}>
                <IconDeviceDesktop />
                <span>System</span>
              </Menu.Item>
              <Menu.Item onAction={() => setTheme("dark")}>
                <IconMoon />
                <span>Dark</span>
              </Menu.Item>
              <Menu.Item onAction={() => setTheme("light")}>
                <IconSun />
                <span>Light</span>
              </Menu.Item>
            </Menu.Content>
          </Menu.Submenu>
        </Menu.Section>
      </Menu.Content>
    </Menu>
  )
}
