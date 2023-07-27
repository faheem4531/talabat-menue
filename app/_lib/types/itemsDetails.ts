export interface ItemsDetail {
	itemsDetail?: [];
}

export interface AddOption {
	addOnId: string;
	multiple: boolean;
	optionId: string;
}

export interface Options {
	name: string;
	price: string;
	calory: string;
	_id: string;
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

export interface Additions {
	name: string | undefined;
	_id: string | undefined;
	options: any;
	isMultipleAllowed: boolean | undefined;
}
export interface ItemCustomizer {
	title?: string;
	id?: string;
	options?: [];
	addOption?: (item: AddOption) => void;
	multiple?: boolean;
	isChecked?: (addOnId: string, optionId: string) => boolean;
}