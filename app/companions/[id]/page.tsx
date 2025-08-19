import { getcompanion } from "@/lib/action/companion.action"
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import CompanionComponents from "@/components/CompanionComponents";

interface CompanionSessionPageProps{
  params: Promise<{id:string}>
}

const companionsession = async({params}: CompanionSessionPageProps) => {
  const {id} = await params
  const companion = await getcompanion(id);
  const user = await currentUser();
  const {name,topic,subject,title,duration} = companion

  if(!user) redirect(('/sign-in' ))
    if(!name) redirect(('/companions'))
  return (
    <main>
  <article className="flex justify-between items-center rounded-lg border border-black p-6 max-md:flex-col max-md:items-start gap-4">
    {/* Left Section */}
    <div className="flex items-center gap-4">
      {/* Subject Icon */}
      <div
        className="flex size-[72px] items-center justify-center rounded-lg"
        style={{ backgroundColor: getSubjectColor(subject) }}
      >
        <Image
          src={`/icons/${subject}.svg`}
          alt={subject}
          width={28}
          height={28}
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-bold text-2xl">{name}</p>
          <span className="subject-badge">{subject}</span>
        </div>
        <p className="text-lg">{topic}</p>
      </div>
    </div>

    {/* Right Section (Duration) */}
    <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
      {duration} minutes
    </p>
  </article>
  <CompanionComponents 
  {...companion}
  companionId ={id}
  userName = {user.firstName!}
  userImage= {user.imageUrl!}
  />
</main>

  )
}

export default companionsession