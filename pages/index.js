import { getFeaturedEvents } from '../dummy-data';

function StartingPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page - Show Featured Events</h1>
    </div>
  );
}

export default StartingPage;
