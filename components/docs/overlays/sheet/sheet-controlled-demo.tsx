"use client"

import { useState } from "react"

import { Button, Sheet, Textarea } from "ui"

export default function SheetControlledDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(true)}>Feedback</Button>
      <Sheet.Content isOpen={isOpen} onOpenChange={setIsOpen}>
        <Sheet.Header>
          <Sheet.Title>Submit Feedback</Sheet.Title>
          <Sheet.Description>Please let us know your thoughts and how we can improve our service.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Textarea label="Your Feedback" placeholder="Type your feedback here..." />
        </Sheet.Body>
        <Sheet.Footer>
          <Button appearance="outline" onPress={() => setIsOpen(false)}>
            Close
          </Button>
          <Button intent="primary" onPress={() => setIsOpen(false)}>
            Submit Feedback
          </Button>
        </Sheet.Footer>
      </Sheet.Content>
    </>
  )
}
