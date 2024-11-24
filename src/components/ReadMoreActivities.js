import React from 'react'
import { useLocation } from 'react-router-dom';
import ActivityCard from './ActivitiesCards';

function ReadMoreActivities() {
    const location = useLocation();
    const data = location.state?.ActivityData || {};
    console.log(data,"yusfdufhsfd");
  return (
    <div className='w-full flex flex-wrap ml-28'> 
        {  
        data.map((activity)=>(
            <ActivityCard 
            key={activity.id}
            imageUrl={activity.image}
            title={activity.title}
            description={activity.discription}
            />
        ))
    }
    </div>
  )
}

export default ReadMoreActivities