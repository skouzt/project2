"use client"

import { useEffect, useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants"
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const SubjectFilter = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selected, setSelected] = useState<string>("")

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (selected) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "subject",
          value: selected,
        })
        router.push(newUrl)
      } else {
        if (pathname === "/companions") {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["subject"],
          })
          router.push(newUrl)
        }
      }
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [selected, router, searchParams, pathname])

  return (
      <Select value={selected} onValueChange={setSelected} >
        <SelectTrigger className="input capitalize">
          <SelectValue placeholder="Select Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Subjects</SelectItem>
          {subjects.map((subject) => (
            <SelectItem key={subject} value={subject} className="capitalize">
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    
  )
}

export default SubjectFilter
