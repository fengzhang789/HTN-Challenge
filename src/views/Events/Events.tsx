import { useEffect, useState } from "react";
import { gql, request } from "graphql-request";
import Navigation from "./Navigation";


// Events is a React functional component that returns the events page of the app.
const Events: React.FC = () => {
  return (
    <main className="events flex flex-col w-screen min-h-screen
                     lg:flex-row">
      {/* NAVBAR */}
      <Navigation />

      {/* RIGHT DASHBOARD */}
      <section className="right-dash bg-bgSecondary h-full">
        
      </section>
    </main>
  )
}

export default Events