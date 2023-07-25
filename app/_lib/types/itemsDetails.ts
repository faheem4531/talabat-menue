export interface ItemsDetail {
	itemsDetail?: Array<any>
}

export interface AddOnSelecter {
	title?: string;
	price?: string;
	caleries?: string;
	checked?: boolean;
	addOnId?: string;
	optionId?: string;
	multiple?: boolean;
	isChecked?: any;
	addOption?: any;
}

export interface ItemCustomizer {
  title?: string;
  id?: string;
  options?: Array<any> | any;
  addOption?: (item: any) => void;
  multiple?: boolean;
  isChecked?: (addOnId: string, optionId: string) => boolean;
}