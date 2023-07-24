import React from "react";
import QuantityCounter from "../../_components/QuantityCounter";
import cartItemImg from "../../_assets/svgs/cartItemImg.svg";
import Image from "next/image";

interface Props {
  title: string;
  price: string;
  cartImg: string;
  incrementCounter?: () => void,
  decrementCounter?: () => void,
  count?: number
}

const CartItem = ({ cartImg, title, price, incrementCounter = () => { }, decrementCounter = () => { }, count = 0 }: Props) => {
  return (
    <div>
      <div className="px-4 mb-3">
        <div
          className="content relative flex cursor-pointer rounded-[8px] p-[14px] pt-[20px]"
          style={{
            boxShadow: " 0px 2.5px 8px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="mr-5">
            <Image
              height={97}
              width={95}
              style={{
                minHeight: "97px",
                maxHeight: "97px",
                minWidth: "95px",
                maxWidth: "95px",
                borderRadius: 10,
                objectFit: "cover",
              }}
              src={cartImg}
              alt="Food Image"
            />
          </div>
          <div className="flex grow flex-col justify-between">
            <div className="relative flex items-center justify-between text-sm font-bold">
              <h3>{title}</h3>
            </div>
            {/* <h4 className="my-1 line-clamp-2 text-xs text-gray500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h4> */}
            <span className="text-[16px] font-bold ">{price} SAR</span>

            <div className="flex items-center justify-between">
              <div></div>
              <QuantityCounter
                color="text-white"
                bgColor="bg-[#C84044]"
                count={count}
                delIconflag={true}
                incrementCounter={incrementCounter}
                decrementCounter={decrementCounter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
