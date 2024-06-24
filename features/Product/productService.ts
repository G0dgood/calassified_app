import { baseUrl, buildDynamicURL } from '@/shared/baseUrl';
import axios from 'axios';
  
 

  // Product Data  
const productData = async (input: any) => {   
  const {id ,limit} =input
  const base = baseUrl +'/products'
  const url = buildDynamicURL(id , limit, null,base); 
	const { data }: any = await axios.get(url) 
   return data
};
  // Product Details 
const productDetails = async (input: any) => {   
  const {id , limit} =input
  const base = baseUrl +'/products'
  const url = buildDynamicURL(id , limit, null,base); 
	const { data }: any = await axios.get(url) 
   return data
};

 
   
const authService = { 
  productData, 
  productDetails
}

export default authService
