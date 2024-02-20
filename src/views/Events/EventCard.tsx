import React from 'react'
import { getTime } from '../../utils/dates'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

type Props = {
  event: {
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
}

const EventCard: React.FC<Props> = ({ event }: Props) => {
  const { isAuthenticated } = useAuth0()

  

  return (
    <div className="event bg-card mx-5 py-4 px-5 rounded-xl border-accent border-2 border-opacity-[0.4]
                    sm:mx-10">
      <p className="text-md">{`${getTime(event.start_time)} - ${getTime(event.end_time)}`}</p>
      <h2 className="font-bold text-accent text-xl pb-3
                     md:text-2xl">{event.name}</h2>
      {/* <p className="pb-4 leading-7">{event.description}</p> */}

      {/* Prints the speakers if there are any */}
      {event.speakers.length > 0 ? (
        <p className="pb-4">By: {
          event.speakers.map((speaker, index) => (
            <span key={index}>
              {speaker.name}
              {event.speakers.length == 1 ? "" : ", "}
            </span>
          ))
        } 
        </p>
        ) : null}
      
      <div className='links flex flex-row gap-3'>
        <button className="bg-primary w-[50%] max-w-[150px] py-1 md:py-2 rounded-full">
          <Link to={`/events/${event.id}`}>
            View Event
          </Link>
        </button>

        
      </div>
      
    </div>
  )
}

export default EventCard



// {/* PUBLIC URL */}
// {event.public_url && (
//   <PrimaryButton text="Recording" link={event.public_url} />
// )}

// {/* PRIVATE URL */}
// {event.private_url && isAuthenticated ? (
//   <PrimaryButton text="View Event" link={event.private_url} />
// ) : null}