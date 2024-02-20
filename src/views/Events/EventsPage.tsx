import Navigation from "./Navigation";
import EventCard from "./EventCard";
import useAllEventData from "../../hooks/useAllEventData";
import { Events } from "../../types/index";

// EventsPage is a React functional component that returns the events page of the app.
const EventsPage: React.FC = () => {
  const events: Events | null = useAllEventData();

  return (
    <main className="events flex flex-col w-full min-h-screen h-full
                     md:flex-row">
      {/* NAVBAR */}
      <Navigation />
      

      {/* RIGHT DASHBOARD */}
      <section className="right-dash bg-secondary min-h-screen h-full w-full pb-6
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

export default EventsPage