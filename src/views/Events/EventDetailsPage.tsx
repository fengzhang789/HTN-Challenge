import React from 'react';
import { useParams } from 'react-router-dom';
import { EventDetails, Events } from '../../types/index';
import Navbar from '../../components/Navbar';
import { getTime, getDate } from '../../utils/dates';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import useEventData from '../../hooks/useEventData';
import useAllEventData from '../../hooks/useAllEventData';
// 
const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams();
  const { isAuthenticated } = useAuth0();

  // Find the event with the given id
  const event: EventDetails | null | undefined = useEventData(eventId ?? '');
  const allData: Events | null = useAllEventData();

  // Find the infomration on the related events
  const relatedEvents = event?.related_events.map((relatedEvent) => {
    console.log(relatedEvent)
    return allData?.sampleEvents.find((event) => event.id == relatedEvent);
  });

  console.log(relatedEvents)
  
  return (
    <React.Fragment>
      {event ? (
        <React.Fragment>
          <Navbar />
          
          <main className="bg-bgSecondary flex flex-col p-5 h-screen
                           sm:px-8 md:px-12 lg:px-24 xl:px-40 xl:p-12">
            {/* TITLE, DATE and DESCRIPTION*/}
            <h1 className="text-2xl font-bold text-accent pb-3 sm:text-3xl lg:text-4xl xl:text-5xl">{event.name}</h1>
            <p className='font-bold sm:text-lg xl:text-xl'>{`${getDate(event.start_time)}, ${getTime(event.start_time)} - ${getTime(event.end_time)}`}</p>
            <p className='sm:text-lg opacity-[72%] pt-1 xl:text-xl xl:leading-7 xl:pt-3'>{event.description}</p>

            {/* public and private links */}
            <div className='links pt-5 flex flex-row gap-3'>
              {event.public_url && 
                <PrimaryButton text='Recording' link={event.public_url} />
              }
              
              {/* If there is a private URL and the user is logged in, they can view the link */}
              {event.private_url && isAuthenticated ? (
                <PrimaryButton text='Hopin link' link={event.private_url} />
              ) : null}
            </div>

            {/* Related events */}
            {relatedEvents && 
              <div className='pt-5 sm:text-lg xl:text-xl'>
                <h2 className='text-xl font-bold text-text opacity-[72%] py-5 sm:text-2xl xl:text-3xl'>Related Events</h2>
                <ul className='links flex flex-col gap-1 xl:gap-2'>
                  {relatedEvents.map((relatedEvent, index) => (
                    <li key={index}>
                      {relatedEvent && 
                      <Link className='underline text-blue-500' to={`/events/${relatedEvent.id}`}>
                        {relatedEvent.name} - {getDate(relatedEvent.start_time)} {getTime(relatedEvent.start_time)}
                      </Link>}
                    </li>
                  ))}
                </ul>
              </div>
            }
            
          </main>
        </React.Fragment>
        
      ) : (
        <div className='text-black'>Loading...</div>
      )}
    </React.Fragment>
  );
}

export default EventDetailsPage;