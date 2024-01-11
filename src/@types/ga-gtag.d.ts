declare function gtag(
  command: 'event',
  eventName: string,
  eventParams?: { [key: string]: any }
): void;

declare namespace gtag {
  // Add additional declarations for other functions if needed
}

export default gtag;
