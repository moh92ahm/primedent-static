"use client"

import React from 'react'
import Image from 'next/image'

interface BlogPost {
  title: string
  date: string
  image: string
  href: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Importance Of Routine Dental Check-Ups.',
    date: '12 / Aug',
    image: '/blog/blog-1.jpg',
    href: '#'
  },
  {
    title: 'Simple Strategies To Keep Your Teeth Free From.',
    date: '12 / Aug',
    image: '/blog/blog-2.jpg',
    href: '#'
  },
  {
    title: 'Explore Safe And Effective Options To Achieve.',
    date: '12 / Aug',
    image: '/blog/blog-3.jpg',
    href: '#'
  }
]

const RecentBlogSection = () => {
  return (
    <section className="bg-[#220f40] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-[#c1b3a8] font-semibold tracking-wide"># Dental Blog</p>
          <h2 className="text-3xl font-serif font-semibold">Oral Health Tips & Updates.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white text-black rounded overflow-hidden shadow-md">
              <Image src={post.image} alt={post.title} width={400} height={300} className="w-full h-[200px] object-cover" />
              <div className="p-5">
                <p className="text-lg font-bold text-[#d7b26d]">{post.date}</p>
                <h3 className="text-md font-medium mt-2">{post.title}</h3>
                <a href={post.href} className="text-sm text-[#220f40] mt-2 inline-block hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentBlogSection
