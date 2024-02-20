import Navigation from "./Navigation";
import EventCard from "./EventCard";
import useAllEventData from "../../hooks/useAllEventData";
import { Events } from "../../types/index";
import { useEffect, useState } from "react";

// EventsPage is a React functional component that returns the events page of the app.
const EventsPage: React.FC = () => {
  const allData: Events | null = useAllEventData();
  const [events, setEvents] = useState<Events | null>(null);
  const [input, setInput] = useState<string>('');
  const [selectedEventType, setSelectedEventType] = useState<string>('');
  
  // All possible event types
  const eventTypes: string[] = ["Workshop", "Activity", "Tech talk"];


  // Remove the accent class from all the buttons
  const removeAccent = (): void => {
    const buttons = document.querySelectorAll('input[type="button"]');
    buttons?.forEach((button) => {
      button.classList.remove("bg-accent");
      button.classList.add("bg-primary");
    });
  };

  // set the events to allData when it is loaded
  useEffect(() => {
    setEvents(allData);
  }, [allData]);

  // EVENT FILTERING
  useEffect(() => {
    const filteredEvents = allData?.sampleEvents.filter((event) => {
      // Filter based on the search input
      const nameMatches: boolean = event.name.toLowerCase().includes(input.toLowerCase());
      

      // If the user has selected an event type, also filter based on that
      if (selectedEventType !== '') {
        removeAccent()

        // add the accent class to the selected button
        const filterButtonElement: HTMLInputElement | null = document.querySelector(`input[value="${selectedEventType}"]`)
        filterButtonElement?.classList.add("bg-accent");
        filterButtonElement?.classList.remove("bg-primary");
        
        const typeMatches: boolean = event.event_type === selectedEventType.split(" ").join("_").toLowerCase(); // the split and join is needed for tech_talk
        return typeMatches && nameMatches;
      }
      
      return nameMatches
    })

    if (filteredEvents) {
      setEvents({sampleEvents: filteredEvents}) // since events is of type Events
    }
  }, [input, allData, selectedEventType])

  return (
    <main className="events flex flex-col w-full min-h-screen h-full
                     md:flex-row">
      <Navigation />

      {/* RIGHT DASHBOARD */}
      <section className="right-dash bg-secondary min-h-screen h-full w-full pb-6
                          md:ml-60 lg:ml-72 xl:ml-80">
        <h1 className="font-bold text-2xl text-center py-5">Events & Workshops</h1>

        {/* FILTERING */}
        <div className="filter-container w-full px-5 
                        sm:px-10 xl:flex xl:flex-col xl:items-center xl:px-0">

          {/* FILTERS WITH BUTTONS */}
          <div className="filters flex flex-col justify-between w-full sm:flex-row sm:justify-between xl:w-[80%]">
            <h3 className="font-bold text-lg">Filters:</h3>

            {/* BUTTONS CONTAINER */}
            <div className="buttons-container w-full flex flex-row gap-4 sm:w-auto">
              {eventTypes.map((type, index) => (
                <input className="bg-primary w-24 max-w-[150px] py-1 md:py-2 rounded-full cursor-pointer"
                  type="button"
                  value={type} 
                  key={index} 
                  onClick={() => {
                    // if the user clicks on the same button, deselect it
                    if (selectedEventType === type) {
                      removeAccent()
                      setSelectedEventType('')
                      return
                    } else {
                      setSelectedEventType(type)
                      console.log(type);
                    }
                }}/>
              ))}
            </div>
          </div>
          
          {/* SEARCH BOX */}
          <div className="search-box xl:w-[80%]">
            <h3 className="font-bold text-lg">Search for an event:</h3>
            <input className="bg-text rounded-md py-1 w-full placeholder:italic text-black pl-5" 
              type="text" placeholder="Search for an event" 
              value = {input}
              onChange={(e): void => {
              setInput(e.target.value)
            }}></input>
          </div>
          
        </div>
        
        {events ? (
          // When the events are loaded, display them
          <div className="events-holder flex flex-col justify-center gap-8 xl:items-center xl:w-full">
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