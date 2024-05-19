import React from "react";
import { Grid } from 'react-loader-spinner';

export default function LoadingPage() {
    return (
        <div className="anime">
            <Grid
                height="140"
                width="280"
                radius="13"
                color="aquamarine"
                ariaLabel="loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}
