import React from "react";
import { Grid } from 'react-loader-spinner';
import "./styles.css";

export default function LoadingPage() {
    return (
        <div className="container">
            <div className="row">
            <div className="col anime">
            <Grid
                height="80"
                width="80"
                radius="13"
                color="rgb(11, 132, 145)"
                ariaLabel="loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
        <div className="col anime">
            <Grid
                height="80"
                width="80"
                radius="13"
                color="rgb(11, 132, 145)"
                ariaLabel="loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
        <div className="col anime">
            <Grid
                height="80"
                width="80"
                radius="13"
                color="rgb(11, 132, 145)"
                ariaLabel="loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
            </div>
        </div>
    );
}
