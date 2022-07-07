import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import API from './Movie'

export const getServerSideProps:GetServerSideProps = async () =>{
    const res = await fetch (API);
    const data = await res.json;
    return{
        props:{
            data
        }
    }
}
