import React from 'react';
import {BrowserRouter, Redirect, Route, useRouteMatch} from "react-router-dom";
import ReviewList from "../components/review/ReviewList";
import ReviewRegister from "../components/review/ReviewRegister";




const Reviews = () => {

    return (
        <BrowserRouter>
            <Route path="/reviews/list/:mno">
                <ReviewList></ReviewList>
            </Route>
            <Route path={`/reviews/register`}>
                <ReviewRegister></ReviewRegister>
            </Route>

        </BrowserRouter>
    );
};

export default Reviews;