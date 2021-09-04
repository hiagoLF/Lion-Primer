export function getOccurrencesNumberOfElementInText(
  element: string,
  text: string
) {
  const elementRegexString = new RegExp(element, "g");
  const elementOccurrencesNumber = text.match(elementRegexString)?.length || 0;
  return elementOccurrencesNumber;
}
