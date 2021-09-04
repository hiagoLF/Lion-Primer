export function turnTextStringBackToFront(textString: string) {
  const backToFrontTextString = textString.split("").reverse().join("");
  return backToFrontTextString;
}
