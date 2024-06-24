import React from 'react'
import Image from 'next/image'
import { postData } from '@/data/data'

const PracticeAdvice = () => {


	return (
		<section className='furniture_section_four'>
			<h6 className='furniture_section_post_title'>Practice Advice</h6>
			<h3 className='furniture_section_post_title_sub'>Featured Posts</h3>

			<div className='furniture_section_post_container'>
				{postData.map(post => (
					<div className='furniture_section_post_container_card' key={post.id} >
						<Image src={post.image} className='furniture_section_post_container_img' alt='post_img' />
						{post.isNew && <span className='post_overlay-text'>NEW</span>}
						<div className='furniture_section_post_img_details'>
							<div className='furniture_section_post_img_details_small_container'>
								<small className='post_img_details_small1'>{post.brand}</small>
								<span className='post_img_details_small2'>{post.category}</span>
								{post.tags && post.tags.map((tag, index) => (
									<span key={index} className='post_img_details_small3'>{tag}</span>
								))}
							</div>
							<h4 className='post_img_details_small_h4'>{post.title}</h4>
							<p className='post_img_details_small_p'>{post.description}</p>
							<div className='post_img_details_small_comments'>
								<div className='post_img_details_small_comments-flex'>
									<Image src={post.commentImages[0]} alt='comment_img' />
									<small className='post_img_details_small_comments-flex_small'>{post.date}</small>
								</div>
								<div className='post_img_details_small_comments-flex'>
									<Image src={post.commentImages[1]} alt='comment_img' />
									<small className='post_img_details_small_comments-flex_small'>{post.comments}</small>
								</div>
							</div>
							<div className='post_img_arrow_container'>
								<h6 className='post_img_details_small_comments-flex_h6'>
									<a href={post.learnMoreLink}>{post.learnMoreText}</a>
								</h6>
								<Image src={post.arrowImage} alt='arrow_img' />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default PracticeAdvice

