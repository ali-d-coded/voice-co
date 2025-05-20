import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import React from 'react'

export default function AuthPage() {
  return (
    <div className='mt-10 backdrop-blur-2xl bg-white/[0.001] rounded-[48px] border-1 border-white/10 px-2  p-6  text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:bg-white/[0.01] transition-all duration-300 text-center'>
          <h1 className="text-center font-serif-4 text-2xl px-1 sm:text-3xl text-transparent bg-clip-text bg-[radial-gradient(circle,rgba(236,236,238,0.8)_67%,rgba(255,255,255,0.07)_100%)]">
            Welcome Back
        </h1>
        <h2 className='text-white/50'>
            sign in to continue
        </h2>

        <section className='mt-5 grid gap-4 justify-center'>
            <button className='bg-white px-5 py-2 flex justify-center items-center gap-2 font-semibold rounded-4xl text-black min-w-[370px] '>
                <Image src={"/google.svg"} width={20} height={20} alt='google' />
                <p>
                    Log in with Google
                </p>
            </button>

            <div>
                <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
            </div>
        </section>
    </div>
  )
}
