import React from 'react'
import PrimaryButton from '../../components/ui/PrimaryButton'
import { useAuth0 } from '@auth0/auth0-react'

type Props = {
  event: {
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
  }
}

const EventCard: React.FC<Props> = ({ event }: Props) => {
  const { isAuthenticated } = useAuth0()

  // Neatly converts a unix timestamp to a date string
  const unixToDate = (unix: number) => {
    const date = new Date(unix);
    return date.toDateString() + ", " + date.toString().split(" ")[4];
  }

  return (
    <div className="event bg-card mx-5 py-4 px-5 rounded-xl" key={event.id}>
      <p className="text-md">{unixToDate(event.start_time)}</p>
      <h2 className="font-bold text-accent text-xl pb-3">{event.name}</h2>
      <p className="pb-4 leading-7">{event.description}</p>

      {/* Prints the speakers if there are any */}
      {event.speakers.length > 0 ? (
        <p className="pb-4">Presented by: {
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
        {/* PUBLIC URL */}
        {event.public_url && (
          <PrimaryButton text="Recording" link={event.public_url} />
        )}
        
        {/* PRIVATE URL */}
        {event.private_url && isAuthenticated ? (
          <PrimaryButton text="Join Event" link={event.private_url} />
        ) : null}
      </div>
      
    </div>
  )
}

export default EventCard