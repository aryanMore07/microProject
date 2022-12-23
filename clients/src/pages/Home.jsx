import React from "react";
import "./home.css";
import Shuffle from "../components/Shuffle/Shuffle";
import Category from "../components/Category/Category";
import Image from "../components/Image/Image";

export default function Home() {
    return (
        <div className="container">
            <div className="innerContainer">
                <Category />
                <Image />
            </div>
            <Shuffle />
        </div>
    );
}
