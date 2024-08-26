import React from "react";
import { Bars } from "react-loader-spinner";

export default function Loading() {
  return <div className="flex justify-center items-center py-6">
 <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
</div>
}
