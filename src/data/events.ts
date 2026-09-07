export interface CommunityEvent {
  id: string;
  title: string;
  status: "past" | "upcoming";
  date?: string;
  location?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  link?: string;
}
// No event titles, dates, venues, or identifiable event photos were supplied.
// Add only confirmed events; never infer dates from photo filenames.
export const events: CommunityEvent[] = [];
export const eventsContent = {
  eyebrow: "Community & connection",
  title: "Events",
  intro: "Community activities are part of our mission of long-term healing and resilience.",
  emptyTitle: "More ways to connect, coming soon.",
  emptyText: "There are no announced events to share yet. Check back here for community gatherings and event details.",
};
