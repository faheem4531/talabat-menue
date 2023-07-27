export interface CartItem {
	title: string;
	price: string;
	cartImg: string;
	incrementCounter?: () => void,
	decrementCounter?: () => void,
	count?: number
}

export interface CartBtn {
  btnText1: string;
  btnline?: boolean;
  btnText2?: string;
  btnClasses?: string;
  onClick?: () => void;
  // font: string;
  // btnPadding: string;
  // center?: string;
  // btnHeight: string;
  // btnWidth: string;
  // bgColor: string;
}