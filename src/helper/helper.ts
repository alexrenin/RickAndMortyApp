import React from "react";

export function preventEvent(event:  React.FormEvent<HTMLFormElement>): void {
  event.preventDefault()
}