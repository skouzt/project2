import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <>
    <main>
    <h1>Popular Companion</h1>
    <section className='home-section'>
      <CompanionCard 
      id='123'
      name="Neura the Brainy Explorer"
      topic='Neural Network of the Brain'
      subject="Science"
      duaration={45}
      color="#b9cbe1"
      />
      <CompanionCard 
      id='456'
      name="Countsy the Number Wizard"
      topic='Derivatives & Integrals'
      subject="Maths"
      duaration={30}
      color="#d9b06c"
      />
      <CompanionCard 
      id='789'
      name="Verba the Vocabulary Builder"
      topic='English Literature'
      subject="Language"
      duaration={30}
      color="#9da77e"
      />
    </section>
    <section className='flex gap-4 justify-between items-start w-full'>
     
      <CompanionList 
      title = "Recently completed session"
      companions = {recentSessions}
      className = "w-2/3 max-lg:w-full mt-8 mb-8"
      />

       <CTA />
      
    </section>
    
    </main>
    </>
  )
}

export default Page