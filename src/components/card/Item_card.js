import React from "react";
import nnk_item from "./../../Data/nnk_item.json";

const Item_Card = () => {
  const nnk_itemContainer = [];
  const keys = Object.keys(nnk_item);

  keys.forEach((key) => {
    nnk_itemContainer.push(...nnk_item[key]);
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Price (per item)</th>
            <th scope="col">Qty</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {nnk_itemContainer !== undefined && (
            <>
              {nnk_itemContainer.map((res, index) => {
                // console.log(res.id);
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{res.item_name}</td>
                    <td>
                      <img src={res.img_url} />
                    </td>
                    {/* <td>{res}</td> */}
                    {/* <td>{res.qty}</td> */}
                    <td>{res.item_description}</td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </>
  );
};
export default Item_Card;
