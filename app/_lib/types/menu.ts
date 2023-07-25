export interface Menu { }

export interface Catagories {
	catagories?: any;
}

export interface CartWithItems {
	categories: Array<any>;
	query: string;
	cart: any
}

export interface MenuItem {
  id: string;
  itemsImg: string;
  title: string;
  discription: string;
  calerioes: string;
  price: string;
  additions: Array<any>;
}

export interface MenuItemsContainer {
  title: string;
  id: string;
  items: Array<any>;
  query: string;
}
