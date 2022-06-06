import { useEffect, useState } from "react"
import { API_ENDPOINT } from "../constants"
import { useAPI } from "./useHttp"

export function useTransactionDetails(type: string) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [totalItems, setTotalItems] = useState(null)
  const [totalPages, setTotalPages] = useState(null)

  const {API} = useAPI()

  const updateRecords = async(page: number, limit: number,type: string) => {
    setIsLoading(true)
    try{
      const response = await API.get(API_ENDPOINT.GET_TRANSACTION_LIST(page,limit,type))
      const { data, statusCode } = response?.data
      if(statusCode === 200){
        setData(data.result)
        setTotalItems(data.totalItems)
        setTotalPages(data.totalPages)
        setCurrentPage(data.currentPage)
      }
    }catch(error){
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  const getNextPage = () => {
    const nextPage = currentPage + 1
    updateRecords(nextPage, limit, type)
  }

  const getPreviousPage = () => {
    const previousPage = currentPage - 1
    updateRecords(previousPage, limit, type)
  }

  const getParticularPage = (pageNumber: number) => {
    updateRecords(pageNumber, limit, type)
  }

  useEffect(()=>{
    updateRecords(currentPage, limit, type)
  },[])

  return {
    data,
    currentPage,
    totalItems,
    totalPages,
    isLoading,
    limit,
    setLimit,
    getNextPage,
    getPreviousPage,
    getParticularPage
  }
}