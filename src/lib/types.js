import {
  arrayOf, number, shape, string, oneOfType, element,
} from 'prop-types';

export const chunksType = shape({
  start: number,
  end: number,
  numbers: arrayOf(oneOfType([string])),
});

export const sectionType = shape({
  locus: string.isRequired,
  path: string.isRequired,
  xml: string.isRequired,
  link: string,
  notes: string,
  chunks: chunksType.isRequired,
});

export const publicationType = shape({
  path: string.isRequired,
  author: string.isRequired,
  work: string.isRequired,
  editors: oneOfType([string, arrayOf(string)]).isRequired,
  sections: arrayOf(sectionType).isRequired,
});

export const collectionType = shape({
  title: oneOfType([string, element]).isRequired,
  publications: arrayOf(publicationType),
  text: string,
});

export const configType = shape({
  logo: string,
  link: string,
  title: oneOfType([string, element]).isRequired,
  subtitle: string.isRequired,
  copyright: string,
  report: string,
  github: string,
  twitter: string,
  collections: arrayOf(collectionType).isRequired,
});

export const publicationMatchType = shape({
  params: shape({
    chunk: string.isRequired,
  }).isRequired,
});

export const publicationGroupMatchType = shape({
  params: shape({
    publication: string.isRequired,
  }).isRequired,
});
