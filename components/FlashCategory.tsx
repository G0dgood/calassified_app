import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
interface FlashSalesProps {
	data: any;
}

const FlashCategory: React.FC<FlashSalesProps> = () => {

	return (
		<div className='flashSales_conatainer' data-aos="fade-left">
			<div className='danger-color'>
				<div className='flashSales_tag_color'></div>
				<h3>Categories</h3>
			</div>
			<div >
				<div className='count_down_container_main'>
					<div className='count_down_container_main_flex'>
						<h1>Browse By Category</h1>
					</div>
					<div className='Arrow_container_icon'>
						<div className='Arrow_container_icon_sub'><ArrowBackOutlinedIcon /></div>
						<div className='Arrow_container_icon_sub'><ArrowForwardOutlinedIcon /></div>
					</div>
				</div>
			</div>

			<div className='small_container_main'>
				<div className='small_container'>
					<PhoneAndroidOutlinedIcon />
					<h5>Phones</h5>
				</div>
				<div className='small_container'>
					<DvrOutlinedIcon />
					<h5>SmartWatch</h5>
				</div>
				<div className='small_container'>
					<WatchOutlinedIcon />
					<h5>SmartWatch</h5>
				</div>
				<div className='small_container'>
					<CameraAltOutlinedIcon />
					<h5>Camera</h5>
				</div>
				<div className='small_container'>
					<HeadsetOutlinedIcon />
					<h5>HeadPhones</h5>
				</div>
				<div className='small_container'>
					<VideogameAssetOutlinedIcon />
					<h5>Gaming</h5>
				</div>
			</div>
		</div>
	)
}

export default FlashCategory
