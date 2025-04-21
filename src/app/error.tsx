"use client" // karena ada onclick

interface ErrorProps {
    error: Error;
    reset: () => void //gareturn apa apa
}

export default function Error({error, reset}: ErrorProps){
    return(
        <div>
            An Error occurred : {error.message}
            <button onClick={() => reset()}>Retry</button>
        </div>
    )
}