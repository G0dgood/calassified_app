'use client'
import BestSellingProducts from "@/components/BestSellingProducts";
import Carousels from "@/components/Carousels";
import FlashCategory from "@/components/FlashCategory";
import FlashFeatured from "@/components/FlashFeatured";
import FlashProducts from "@/components/FlashProducts";
import FlashSales from "@/components/FlashSales";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Product from "@/components/Product";
import { customId } from "@/data/data";
import { productData, reset } from "@/features/Product/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/useStore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, isError, message, loading } = useAppSelector((state: any) => state.product);
  // Initialize state with an initial value of 10
  const [counter, setCounter] = useState(10);
  // Error Handling Effect
  useEffect(() => {
    if (isError) {
      // Display an error toast  
      toast.dismiss(); // 
      toast.error(message, { toastId: customId });
    }
    setTimeout(() => {
      dispatch(reset());
    }, 3000);
  }, [dispatch, isError, message]);


  useEffect(() => {
    const input = { limit: counter }
    // @ts-ignore  
    dispatch(productData(input));
  }, [counter, dispatch]);

  return (
    <main  >
      {/* Header */}
      <Header />
      {/* Carousels */}
      <Carousels />
      {/* Flash Sales */}
      <FlashSales data={data} />
      {/* Product Button */}
      <Product setCounter={setCounter} counter={counter} loading={loading} />
      {/* Flash Category */}
      <FlashCategory data={data} />
      {/* Best Selling Products */}
      <BestSellingProducts data={data} />
      {/* Flash Products */}
      <FlashProducts data={data} />
      {/* Product Button */}
      <Product setCounter={setCounter} counter={counter} loading={loading} />
      {/* Flash Featured */}
      <FlashFeatured data={data} />
      {/* footer */}
      <Footer />

    </main>
  );
}
