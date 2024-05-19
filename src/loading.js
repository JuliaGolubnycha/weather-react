import React from "react";
import { Audio } from 'react-loader-spinner';

export default function LoadingPage() {
    return (
        <div className="anime">
            <Audio
                height="140"
                width="280"
                radius="90"
                color="aquamarine"
                ariaLabel="loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}
