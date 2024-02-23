import React from "react";
import NavigationBar from "../components/header/NavigationBar.tsx";
import CategoryStatistics from "../components/statistics/CategoryStatistics.tsx";

export default function CategoryStatisticsPage(){
    return(
        <>
        <NavigationBar/>
        <CategoryStatistics/>
        </>
    )
}