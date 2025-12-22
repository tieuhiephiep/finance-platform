import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="p-4 w-fit">
      <UserButton 
        appearance={{
          elements: {
            userButtonAvatarBox: "!w-[44px] !h-[44px]", 
            userButtonTrigger: "!w-[44px] !h-[44px] !shadow-none",
          }
        }}
      />
    </div>
  )
}