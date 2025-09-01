import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { getAllCompanions, getRecentSessions } from '@/lib/action/companion.action'
import { getSubjectColor } from '@/lib/utils'

const Page = async () => {
  const companion = await getAllCompanions({ limit: 3 })
  const recentSessionCompanion = await getRecentSessions(10)
  
  return (
    <main className='mb-10'> 
      <h1>Popular Companion</h1>
      
      <section className='home-section'>
        {companion.map((companion) => (
          <CompanionCard  
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      
      <section className='flex gap-4 justify-between items-stretch w-full'>
        <CompanionList 
          title="Recently completed session"
          companions={recentSessionCompanion}
          className="w-2/3 max-lg:w-full mt-8 mb-8"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page