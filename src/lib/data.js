export const getDestinations=async()=>{
    const res = await fetch("http://localhost:8000/destination")
    const date = await res.json()
    return date
}