import React from "react";

import GalleryCard from "../../components/GalleryCard/GalleryCard";
import Button from "../../components/Button/Button";
import Category from "../../components/Category/Category";

import styles from "./Home.module.css";
import Shuffle from "../components/Shuffle/Shuffle";

export default function Home() {
    return (
        <div className="container">
            <div className="innerContainer">
            </div>
            <Shuffle />
        </div>
    );
}
