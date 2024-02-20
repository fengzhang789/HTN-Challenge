// Event type
export type EventDetails = {
  id: string,
  name: string,
  event_type: string,
  permission: string,
  start_time: number,
  end_time: number,
  description: string,
  speakers: {
    name: string,
  }[],
  public_url: string,
  private_url: string,
  related_events: string[],
}

export type Event = {
  sampleEvent: EventDetails
}

// Events type
export type Events = {
  sampleEvents: EventDetails[]
}