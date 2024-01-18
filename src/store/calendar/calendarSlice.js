import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

// const tempEvent = {
//   // id: new Date().getTime(),
//   // title: "Cumpleaños del jefe",
//   // notes: "hay que comprar el pastel",
//   // start: new Date(),
//   // end: addHours(new Date(), 2),
//   // bgColor: "#fafafa",
//   // user: {
//   //   id: "123",
//   //   name: "julian",
//   // },
// };
export const calendarSlice = createSlice({
  name: "counter",
  initialState: {
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
  },

  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },

    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },

    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) {
          return payload;
        }
        return event;
      });
    },

    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent.id
        );
        state.activeEvent = null;
      }
    },

    onLoadEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      payload.forEach(event => {
        const exists = state.events.some(dbEvent => dbEvent.id === event.id);
        if (!exists) {
          state.events.push(event);
        }
      });
    },

    onLogadCalendar:(state)=>{
    
      state.isLoadingEvents= true
      state.events = []
      state.activeEvent= null
    }

    
    
    

  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogadCalendar,
} = calendarSlice.actions;
