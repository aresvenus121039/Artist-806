declare module 'ga-gtag' {
  export default function gtag(
    command: 'config' | 'event',
    targetId: string,
    options?: { [key: string]: any }
  ): void;
}
