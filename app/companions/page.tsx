import CompanionCard from '@/components/CompanionCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import { getAllCompanions } from '@/lib/action/companion.action';
import { getSubjectColor } from '@/lib/utils';
import React from 'react'

const companionlibrary = async({searchParams}: SearchParams ) => {
  const filters = await searchParams;
  const subject = filters.subject? filters.subject : ""  ;
  const topic = filters.topic ? filters.topic : ""  ;

  const companion =await getAllCompanions({subject, topic})
 
  return (
    <main className='mb-10'>
      <section className='flex justify-between gap-4  max-sm:flex-col'>
        <h1>Companion Library</h1>
        <div className='flex gap-4'>
          <SearchInput />
          <SubjectFilter />
        </div>

      </section>
      <section className='companions-grid'>
        {companion.map((companion)=> (
          <CompanionCard key={companion.id} {...companion}  color={getSubjectColor(companion.subject)}/>
        ))}
      </section>
    </main>
  )
}

export default companionlibrary