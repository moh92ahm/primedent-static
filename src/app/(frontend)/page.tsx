import type { Metadata } from 'next'
import React from 'react'

// import Image from 'next/image'
import Link from 'next/link'

import BeforeAfterSlider from '@/components/BeforeAfter'
import RotatingImageStrip from '@/components/Testimonials/RotatingImageStrip'
import TestimonialSlider from '@/components/Testimonials/TestimonialSlider'

import RecentBlogSection from '@/components/RecentBlogs'

import type { Page as PageType } from '@/payload-types'
import { RenderHero } from '@/heros/RenderHero'
import { getCachedDocument } from '@/utilities/getDocument'

export const metadata: Metadata = {
  title: 'Home | Primedent',
}

export default async function Page() {
  const page = (await getCachedDocument('pages', 'home')()) as PageType | null
  const images = [
    '/#.jpg'
  ]

  return (
    <div className="relative text-brand-white overflow-hidden">
      <RenderHero
        {...page?.hero}
        type={page?.hero?.type ?? "none"}
        pageTitle={page?.title}
      />

      {/* Services Section */}
      <div className="max-w-screen-xl mx-auto px-6 text-center mb-16">
        <h3 className="text-lg text-brand-primary mb-2"># What We Do Best</h3>
        <h2 className="text-4xl font-heading text-brand-primary font-bold mb-10">Top Dental Treatments, Delivered with Precision</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {['General Dentistry', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Pediatric Dentistry'].map((title) => (
            <div key={title} className="p-6 transition-all border border-brand-primary/30 hover:bg-brand-primary group">
              <h4 className="font-bold font-heading text-2xl text-brand-primary group-hover:text-brand-background mb-2">{title}</h4>
              <p className="text-sm mb-3 text-brand-white group-hover:text-brand-background">Routine Check-ups, Cleanings, And Preventative Care To Enhance Oral Health</p>
              <button className="underline font-bold font-heading text-lg group-hover:text-brand-background">Read more →</button>
            </div>
          ))}
        </div>

        <Link className="inline-block bg-brand-primary text-brand-background font-heading font-bold text-lg py-2 px-6" href="/services">
          View All Services
        </Link>
      </div>

      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          
          {/* Image with angled background */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="absolute -left-5 top-5 w-60 h-72 bg-[#C0A97A] -rotate-6 z-0" />
            <div className="w-60 h-72 bg-gray-300 relative z-10" />
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-brand-accent font-semibold mb-2"># About Us</p>
            <h2 className="text-3xl font-semibold leading-snug mb-4">
              Trusted by Thousands,<br />
              Designed for Comfort
            </h2>
            <p className="text-brand-light mb-6">
              At Primedent Clinics, we’re redefining dental care in Turkey. With advanced technologies,
              internationally trained dentists, and a warm, welcoming environment, we help patients from
              across Europe transform their smiles — safely and affordably. Our clinic combines precision,
              hospitality, and aesthetic results in one experience.
            </p>
            <button className="bg-brand-light text-black font-medium px-6 py-2 rounded hover:bg-white transition">
              More About Us →
            </button>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6">
          
          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="text-brand-accent font-semibold mb-2"># Meet Our Doctor</p>
            <h2 className="text-3xl font-semibold mb-4">Dr. Serhat</h2>
            <p className="text-brand-light mb-6">
              As a dentist, I strive to make my office a comfortable and welcoming place where patients
              feel completely at home. I am passionate about helping my patients achieve and maintain
              beautiful, healthy smiles that they are proud to show off. My patients are an integral part
              of my community, and I am committed to providing them with the most gentle and effective
              dental care possible. Our team understands that dental anxiety can prevent patients from
              scheduling appointments, so we aim to ensure that your visit to Primedent is unlike any other.
            </p>
            <button className="bg-brand-light text-black font-medium px-6 py-2 rounded hover:bg-white transition">
              Learn More →
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-60 h-72 bg-gray-300" />
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-6">
          <p className="text-brand-accent font-semibold mb-2"># Dental Project</p>
          <h2 className="text-3xl font-bold mb-10">A Portfolio of Smiles.</h2>

          <div className="grid md:grid-cols-2 gap-20 p-4">
            <BeforeAfterSlider before="/before-01.jpg" after="/after-01.jpg" />
            <BeforeAfterSlider before="/before-02.jpg" after="/after-02.jpg" />
          </div>
        </div>
      </section>

      <section className=" text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">What Our Patients Say</h2>
          <RotatingImageStrip images={images} />
          <TestimonialSlider testimonials={[
            { name: 'John Doe', role: 'Patient', quote: 'Great service and friendly staff!', image: '/#' },
            { name: 'Jane Smith', role: 'Patient', quote: 'Highly recommend this clinic!', image: '/#' },
            { name: 'Alice Johnson', role: 'Patient', quote: 'Professional and caring team.', image: '/#' },
            { name: 'Alice Johnson', role: 'Patient', quote: 'Professional and caring team.', image: '/#' },
            { name: 'Alice Johnson', role: 'Patient', quote: 'Professional and caring team.', image: '/#' }
          ]} />
        </div>
      </section>

      <div>
        <RecentBlogSection />
      </div>


    </div>
  )
}
