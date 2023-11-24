import React from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data'
function Reviews() {
     return (
          <div className="reviews">
               <div className="review-img">
                    <img src="https://images.pexels.com/photos/9154716/pexels-photo-9154716.jpeg?cs=srgb&dl=pexels-cottonbro-9154716.jpg&fm=jpg" alt="" />
               </div>
               <h4 className="author">
                    فرزاد معصومی
               </h4>
               <p className="job">گرافیست</p>
               <p className="info">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
               <div className="review-button">
                    <button><FaChevronRight /></button>
                    <button><FaChevronLeft /></button>
               </div>
               <button className="random-btn">عشقی</button>
          </div>
     )
}

export default Reviews
