import {
  ComponentProduct,
  ComponentGroup,
  Product,
  ComponentType,
} from "../types/types";

export const isProduct = (
  variableToCheck: any
): variableToCheck is ComponentProduct =>
  variableToCheck &&
  (variableToCheck as ComponentProduct).type === ComponentType.Product;

export const isGroup = (
  variableToCheck: any
): variableToCheck is ComponentGroup =>
  variableToCheck &&
  (variableToCheck as ComponentGroup).type === ComponentType.Group;

export const getProductById = (products: Product[], id: string) => {
  const desiredProduct = (product: Product) => product.id === id;
  const product = products.find(desiredProduct);
  if (product) {
    return product.name;
  }
  return "Unknown";
};

// export function notEmpty<TValue>(
//   value: TValue | null | undefined
// ): value is TValue {
//   return value !== null && value !== undefined;
// }

// export const filteredArray = (array: any[]) => array.filter(notEmpty);

// export function removeNull(
//   array:
//     | any[]
//     | Pick<import("../types/types").CompositeProduct, "name" | "components">
// ) {
//   return array
//     .filter((item: null) => item !== null)
//     .map((item: any) => (Array.isArray(item) ? removeNull(item) : item));
// }

// array.filter((x): x is MyType => x !== null);

// const arr = ["a", null, "b", "c"];
// // string[]
// const stringsOnly = arr.flatMap((f) => (!!f ? [f] : []));
