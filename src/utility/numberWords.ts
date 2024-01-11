export const getNumberWord = (index: number) => {
  const numberWords = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
    'eleventh',
    'twelfth',
    'thirteenth',
    'fourteenth',
    'fifteenth',
    'sixteenth',
  ];

  if (index >= 0 && index < numberWords.length) {
    return numberWords[index];
  } else {
    return 'Invalid Index';
  }
};

export function pathToIndex(text: string) {
  const regex = /\[([^\]]+)\]/;
  const find = text.match(regex);

  if (find && find.length > 1) {
    const num = +find[1];
    return num + 1;
  } else {
    return null;
  }
}

export const setInitValue = (
  name: string,
  isUpdateField: boolean | undefined,
  typeField: string | undefined,
  initialValues: any
) => {
  if (isUpdateField) {
    if (name.includes('gallery')) {
      const inputInfo = name.split('.');
      if (typeField === 'title') {
        return initialValues.gallery[inputInfo[1]]?.title;
      } else if (typeField === 'address') {
        return initialValues.gallery[inputInfo[1]]?.address;
      } else if (typeField === 'photo') {
        return initialValues.gallery[inputInfo[1]]?.photo;
      }
    } else {
      return initialValues[name];
    }
  } else {
    return initialValues[name];
  }
};
