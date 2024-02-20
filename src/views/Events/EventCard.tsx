import React from 'react'
import { getTime } from '../../utils/dates'
import { Link } from 'react-router-dom'
import { EventDetails } from '../../types/index'

type Props = {
  event: EventDetails
}

const EventCard: React.FC<Props> = ({ event }: Props) => {
  return (
    <div className="event bg-card mx-5 py-4 px-5 rounded-xl border-accent border-2 border-opacity-[0.4]
                    sm:mx-10 xl:w-[80%]">
      <p className="text-md">{`${getTime(event.start_time)} - ${getTime(event.end_time)}`}</p>
      <h2 className="font-bold text-accent text-xl pb-3
                     md:text-2xl">{event.name}</h2>

      {/* Prints the speakers if there are any */}
      {event.speakers.length > 0 ? (
        <React.Fragment>
          <p className="pb-4">By:{" "}
            {event.speakers.map((speaker, index) => (
              <React.Fragment key={index}>
                {speaker.name}
                {index < event.speakers.length - 1 && ", "}
              </React.Fragment>
            ))}
          </p>
        </React.Fragment>
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