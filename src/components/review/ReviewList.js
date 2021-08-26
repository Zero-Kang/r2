import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


const getReview = async (mno) => {
    const token = localStorage.getItem("token")

    console.log(token)

    const auth = {headers: {'Authorization': 'Bearer ' + token}}

    const result = await axios.get("http://localhost:8080/movies/reviews/"+mno, auth)

    return result.data

}

const ReviewList = () => {

    let { mno } = useParams();

    const [reviews, setReviews] = useState([])


    useEffect(() => {

        const reviewData = getReview(mno)
        reviewData.then(data => {
            console.log(data)
            setReviews(data.reviewDTOList)
        })

    },[mno])

    const reviewList = reviews.map(review => <li key={review.rno}> {review.reviewText} --------------- {review.score} </li>)


    return (
        <div>
            <h1>Review List </h1>
            <ul>
                {reviewList}
            </ul>
        </div>
    );
};

export default ReviewList;