export interface CompositeProduct {
  id: string;
  name: string;
  components: (ComponentProduct | ComponentGroup)[];
}

export enum ComponentType {
  Product = "PRODUCT",
  Group = "GROUP",
}

export interface ComponentGroup {
  type: ComponentType.Group;
  label: string;
  components: (ComponentGroup | ComponentProduct)[];
}

export interface ComponentProduct {
  type: ComponentType.Product;
  productId: string;
  quantity: number;
  name?: string;
}

export interface Product {
  type: ComponentType.Product;
  id: string;
  name: string;
}

export interface IComponentsPropType {
  type: string;
  id?: string;
  label?: string;
  quantity?: number;
  productId?: string;
  components?: IComponentsPropType[];
}
