import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { addHours } from "date-fns";
import { localizer } from "../helper/CalendarLocalizer";
import { getMessagesES } from "../helper/getMessages";
import { CalendarEvent } from "../components/CalendarEvent";
import { CalendarModal } from "../components/CalendarModal";
import { useUistore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { FabAddNew } from "../components/FabAddNew";
import { FabDelete } from "../components/FabDelete";
import useAuthStore from "../../hooks/useAuthStore";



export const CalendarPage = () =>{
  const{events,activeEvent,setActiveEvent,startLoadingEvents}=useCalendarStore()

  const{user}=useAuthStore()
  const{openDateModal}=useUistore()

  const [lastView, setLastView] = useState(localStorage.getItem('lastView')||'week')

  const eventStyleGetter = (event, start, end, isSelected) => {
  
    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid );
    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
};

  const onDoubleClick = (event) => {
    openDateModal()
  };

  const onOneClick = (event) => {
    setActiveEvent(event)
  };

  const onViewChanged = (event) => {
    localStorage.setItem('lastView',event);
    setLastView(event)
  };

  useEffect(() => {
    startLoadingEvents()
  }, [])
  

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onOneClick}
        onView={onViewChanged}

      />
      <CalendarModal/>
      <FabAddNew/>
      <FabDelete/>
    </>
  );
};
