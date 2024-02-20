import { useEffect, useState } from "react";
import { gql, request } from "graphql-request";
import Navigation from "./Navigation";
import EventCard from "./EventCard";

type Event = {
  sampleEvents: {
    id: string,
    name: string,
    event_type: string,
    permission: string,
    start_time: number,
    end_time: string,
    description: string,
    speakers: {
      name: string,
    }[],
    public_url: string,
    private_url: string,
    related_events: string[],
  }[]
}

// Events is a React functional component that returns the events page of the app.
const Events: React.FC = () => {
  const [events, setEvents] = useState<Event | null>(null);

  useEffect(() => {
    const query = gql`
      query {
        sampleEvents {
          id
          name
          event_type
          permission
          start_time
          end_time
          description
          speakers {
            name
          }
          public_url
          private_url
          related_events
        }
      }
    `

    request('https://api.hackthenorth.com/v3/graphql', query).then((data) => {
      setEvents(data)
      console.log(data)
    })
  }, [])

  return (
    <main className="events flex flex-col w-full min-h-screen h-full
                     md:flex-row">
      {/* NAVBAR */}
      <Navigation />
      

      {/* RIGHT DASHBOARD */}
      <section className="right-dash bg-bgPrimary min-h-screen h-full w-full pb-6
                          md:ml-60 lg:ml-72 xl:ml-80">
        <h1 className="font-bold text-2xl text-center py-5">Events & Workshops</h1>
        
        {events ? (
          // When the events are loaded, display them
          <div className="events-holder flex flex-col justify-center gap-8">
            {events.sampleEvents.sort((a, b) => {
              return a.start_time > b.start_time ? 1 : -1;
            }).map(event => (
              <EventCard event={event} key={event.id} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  )
}

export default Events