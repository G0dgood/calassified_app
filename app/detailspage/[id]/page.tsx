'use client'
import { useEffect } from 'react'
import ProductCover from '@/components/ProductCover';
import ProductDescription from '@/components/ProductDescription';
import { useAppDispatch, useAppSelector } from '@/store/useStore';
import { ToastContainer, toast } from "react-toastify";
import { productData, productDetails, reset } from '@/features/Product/productSlice';
import { customId } from '@/data/data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'

const Productpage = () => {


	const dispatch = useAppDispatch();
	const { data, isError, message } = useAppSelector((state: any) => state.product);
	const { productdata, productisError, productmessage } = useAppSelector((state: any) => state.product);
	const { id } = useParams();




	// Error Handling Effect
	useEffect(() => {
		if (isError) {
			toast.error(message, { toastId: customId });
		} else if (productisError) {
			toast.dismiss();
			toast.error(productmessage, { toastId: customId });
		}
		setTimeout(() => {
			dispatch(reset());
		}, 3000);
	}, [dispatch, isError, message, productisError, productmessage]);


	useEffect(() => {
		const input = { id: id }
		// @ts-ignore  
		dispatch(productData(input));
	}, [dispatch, id]);

	useEffect(() => {
		const input = { limit: undefined }
		// @ts-ignore  
		dispatch(productDetails(input));
	}, [dispatch]);

	const BestsellerComponent = ({ data }: any) => (
		<div className='flash_products_container_support' >
			{data?.products?.map((item: any, index: any) => (
				<Link key={index} className='bestseller_item' href={`/detailspage/${item?.id}`}>
					<div className='bestseller_products_img'>
						<Image src={item?.thumbnail} alt={`Product ${index + 1}`} width={280} height={238} />
					</div>
					<div className='bestseller_text_container' >
						<h5 className='bestseller_card_title_1'>{item?.brand}</h5>
						<div className='bestseller_card_title_3'>
							<span className='bestseller_card_title_2_sub1'>${item?.price}</span>
							<span className='bestseller_card_title_2_sub2'>${item?.discountPercentage}</span>
						</div>
						<span className='bestseller_card_title_2'>{item?.category}</span>
					</div>
				</Link>
			))
			}
		</div >
	);

	return (
		<  >
			{/* Header */}
			<Header />
			<ToastContainer position="bottom-right" />
			{/* ProductCover */}
			<ProductCover data={data} />
			{/* ProductDescription */}
			<ProductDescription data={data} />
			{/* DetailsBestseller */}
			<BestsellerComponent data={productdata} />
			{/* footer */}
			<Footer />
		</>
	)
}

export default Productpage



