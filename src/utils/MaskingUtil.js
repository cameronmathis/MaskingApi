export function recursiveMask(unmaskedItem) {
  if (unmaskedItem === null) {
    return null;
  } else if (
    unmaskedItem instanceof String ||
    typeof unmaskedItem === "string"
  ) {
    return unmaskedItem.replace(/[^\s]/g, "*");
  } else if (unmaskedItem instanceof Array) {
    let maskedItem = [];
    unmaskedItem.forEach((unmaskedValue) =>
      maskedItem.push(recursiveMask(unmaskedValue))
    );
    return maskedItem;
  } else if (typeof unmaskedItem === "object") {
    let maskedItem = {};
    Object.keys(unmaskedItem).forEach(
      (key) => (maskedItem[key] = recursiveMask(unmaskedItem[key]))
    );
    return maskedItem;
  }

  return "Error";
}
