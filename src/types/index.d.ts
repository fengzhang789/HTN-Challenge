// Event type
export type Event = {
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

// Events type
export type Events = {
  sampleEvents: Event[]
}