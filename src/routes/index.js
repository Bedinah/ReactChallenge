import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../views/homepge";
import Search from "../views/search";
import Singlecontent from "../components/singlecontent/singlecontent";
import HomeLayout from "../components/homelayout";
import AddMovieForm  from "../components/addMovieForm"

const Index = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/singlecontent" element={<Singlecontent />}></Route>
        <Route exact path="/addMovieForm" element={<AddMovieForm />}></Route>
      </Routes>
    </HomeLayout>
  );
};

export default Index;
