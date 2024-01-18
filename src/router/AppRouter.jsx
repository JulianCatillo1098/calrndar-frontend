import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../autenticacion/paginas/LoginPage'
import { CalendarPage } from '../calendario/paginas/CalendarPage'
import { getEnvVariables } from '../calendario/helper/getEnvVariables'
import useAuthStore from '../hooks/useAuthStore'

export const AppRouter = () => {
  const {status,checkAuthToken}= useAuthStore()

useEffect(() => {
  checkAuthToken()
}, [])


if(status === 'checking'){
return(
 <h3>
  Cargador...
 </h3> 
  )
}
  return (
    <Routes>
      {
      (status==='no-autenticado')?(
        <>
        <Route path='/autenticacion/*' element={<LoginPage/>}/>
        <Route path='/*' element={<Navigate to= '/autenticacion/login'/>}/>

        </>
        
        ):
        <>
      
        <Route path='/' element={<CalendarPage/>}/>
        <Route path='/*' element={<Navigate to= '/'/>}/>
        
        </>      
      
      
      }
     
     

    </Routes>
  )
}
