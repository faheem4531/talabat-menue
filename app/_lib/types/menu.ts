import PropTypes from 'prop-types';

export interface Menu { }

export interface Catagories {
  catagories?: any;
}

interface Categories {
  active: boolean;
  addedBy: string;
  createdAt: string;
  deletedAt: string;
  hasNextPage: boolean;
  docs: Array<any>;
  hasPrevPage: string;
  id: string;
  image: string;
  limit: number;
  name: string;
  nameAr: string;
  nextPage: string | null;
  offset: number;
  order: number;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  printerId: string;
  supplierId: string;
  totalDocs: number;
  totalPages: number;
  updatedAt: string;
  __v: number;
  _id: string;
}

interface Cart {
  couponCode: string;
  deliveryAddress: {};
  feeRate: number;
  isDryRun: boolean;
  items: Array<any>;
  orderType: string;
  preparationDetails: PreparationDetails;
  restaurantId: string;
  source: string;
  summary: Summary;
  tableFee: TableFee;
  taxRate: number;
}

interface Summary {
  discount: number;
  headerDiscount: number;
  remainingAmountToCollect: number;
  taxOnFee: number;
  taxableFee: number;
  totalBeforeDiscount: number;
  totalFee: number;
  totalPaid: number;
  totalRefunded: number;
  totalTax: number;
  totalTaxableAmount: number;
  totalWithTax: number;
}

interface TableFee {
  fee: number;
  netBeforeTax: number;
  tax: number;
}

interface PreparationDetails {
  expectedEndTime: string;
  expectedStartTime: string;
  kitchenSortingNumber: number;
  preparationTime: number;
}
export interface CartWithItems {
  categories: Array<Categories>;
  query: string;
  cart: Cart;
  updatingFavorites: (id: string) => void;
}

export interface MenuItem {
  id: string;
  itemsImg: string;
  title: string;
  discription: string;
  calerioes: string;
  price: string;
  additions: Array<any>;
  updatingFavorites: (id: string) => void;  
  soldOut: boolean;
}

export interface MenuItemsContainer {
  title: string;
  id: string;
  items: Array<any>;
  query: string;
  updatingFavorites: (id: string) => void;
}
