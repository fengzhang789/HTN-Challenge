// THESE TYPES ARE BASED OFF THE API RETURNS OF THE GRAPHQL API

// EventDetails 
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

// Type for singular event
export type Event = {
  sampleEvent: EventDetails
}

// Type for all events
export type Events = {
  sampleEvents: EventDetails[]
}