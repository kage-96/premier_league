import useSWR from "swr"

const fetcher = async (url:string) => {
  const res = await fetch(url)
  if(!res.ok){
    throw new Error(`HTTP error! status: ${res.status}`)
  }
  return res.json()

}

export const useFetcher = <T>(url:string | null) => {

  const {data,isLoading,error} = useSWR(url,fetcher)
  return {data,isLoading,error}
}