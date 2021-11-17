import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Home Page]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About Page]</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
        <Link to="services">Services</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h1>[services]</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events Page]</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
      </nav>
    </div>
  );
}

export function Oups404() {
  const location = useLocation();
  return (
    <div>
      <h1>This page does not exist on {location.pathname}</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
