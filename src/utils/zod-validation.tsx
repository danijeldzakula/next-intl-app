import z from 'zod';

const urlSchema = z.string().url();

export function parseURL(url: string) {
  return urlSchema.parse(url) ?? '';
}
