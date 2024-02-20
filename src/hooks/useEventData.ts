import { useEffect, useState, } from 'react';
import { Events, EventDetails } from '../types/index';
import useAllEventData from './useAllEventData';

// useEventData(eventID) is a custom React hook that fetches ALL data for a singular event
const useEventData = (eventID: string): EventDetails | null => {
  const [event, setEvent] = useState<EventDetails | null>(null);
  const data: Events | null = useAllEventData();

  useEffect(() => {
    if (data) {
      const event = data.sampleEvents.find((event) => event.id == eventID);
      if (event) {
        setEvent(event as EventDetails);
      }
    }
  
  }, [data, eventID])
  
  return event;
}


export default useEventData;