import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../views/homepge";
import Search from "../views/search";
import Singlecontent from "../components/singlecontent/singlecontent";
import HomeLayout from "../components/homelayout";
import AddMovie from "../components/addMovie";
import Formu from "../components/addmoviForm";
import BasicModal from "../components/modal";
import AddmoviForm from "../components/addmoviForm";
import { TextField } from "@mui/material";

const Index = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/singlecontent" element={<Singlecontent />}></Route>
        <Route exact path="/addMovie" element={<AddMovie />}></Route>
        <Route exact path="/formu" element={<Formu />}></Route>
        <Route exact path="/modal" element={<BasicModal />}></Route>
        <Route exact path="/textField" element={<TextField />}></Route>
        <Route exact path="/addmoviForm" element={<AddmoviForm />}></Route>
      </Routes>
    </HomeLayout>
  );
};

export default Index;
