import { Outlet } from 'react-router-dom'
import { DashboardNavBar } from './DashboardNavBar'
import { DashboardSlidebar } from './DashboardSlidebar'

export const DashboardLayout = () => {
  return (
    <>
    <div className='flex'>
    <DashboardSlidebar/>
    <div className='bg-blue-200/20 w-full'>
    <DashboardNavBar />
    <Outlet/>
    </div>
    </div>
    </>
  )
}
