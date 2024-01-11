import { Remarkable } from 'remarkable';

export const getRichDescription = (string) => {
  const md = new Remarkable({
    html: true,
    breaks: true,
  });
  return md.render(string);
};
