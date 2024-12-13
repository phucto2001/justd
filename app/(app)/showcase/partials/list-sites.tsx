"use client"

import { getSiteName } from "@/resources/lib/utils"
import { Collection, ListBox as Primitive, ListBoxItem, ListBoxSection, Text } from "react-aria-components"
import { Avatar } from "ui"

interface Props {
  sites: {
    name: string
    url: string
  }[]
}

export function ListSites({ sites }: Props) {
  return (
    <Primitive aria-label="Showcase">
      <ListBoxSection className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <Collection items={sites}>
          {(item) => {
            return (
              <ListBoxItem
                rel="nofollow"
                target="_blank"
                className="flex items-center gap-x-3 rounded-lg bg-secondary/70 px-3 py-2.5 ring-1 ring-border transition data-hovered:bg-secondary data-focused:outline-hidden data-focus-visible:ring-1 data-focus-visible:ring-ring"
                textValue={item.name}
                href={`${item.url}?ref=getjustd.com/showcase`}
                id={getSiteName(item.url)}
              >
                <Avatar
                  size="medium"
                  shape="square"
                  src={`https://favicon.im/${item.url}`}
                  alt="irsyad.co favicon (large)"
                />
                <div className="flex flex-col gap-y-0.5">
                  <Text slot="label" className="font-medium sm:text-sm">
                    {item.name}
                  </Text>
                  <Text slot="description" className="text-muted-fg text-xs">
                    {item.url}
                  </Text>
                </div>
              </ListBoxItem>
            )
          }}
        </Collection>
      </ListBoxSection>
    </Primitive>
  )
}
