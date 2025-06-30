import type { Metadata } from 'next'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Primedent',
}

export default function AboutUsPage () {

  return (
    <div className="relative text-brand-white overflow-hidden">
      {/* Hero Section */}
      <div className="text-center pt-20 pb-10">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-brand-light">Home - About Us</p>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-screen-xl mx-auto px-6 md:flex md:items-center md:gap-10 mb-24">
        <div className="md:w-1/2 w-full">
          <h3 className="text-brand-accent font-semibold mb-2"># Who We Are</h3>
          <h2 className="text-3xl font-bold mb-4">Redefining Dental Care</h2>
          <p className="text-brand-light">
            PrimeDent Clinics was founded with a clear vision: to elevate the standard of dental care by focusing on patient well-being, innovation, and excellence. Our approach is holistic, providing a warm, patient-centered experience that inspires trust in every interaction. At PrimeDent, we believe dentistry should not just address problems but be transformational.
            <br /><br />
            We’ve built a clinic model that prioritizes trust, transparency, and top-quality results—especially for international visitors seeking clean, effective, and affordable dental care services.
          </p>
        </div>
        <div className="md:w-1/2 w-full mt-10 md:mt-0">
          <Image src="/asdasd.png" alt="" width={400} height={400} className="rounded w-full object-contain" priority />
        </div>
      </div>

      {/* Our Vision & Values Section */}
      <div className="max-w-screen-xl mx-auto px-6 md:flex md:items-center md:gap-10 mb-24">
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <Image src="/" alt="" width={400} height={400} className="rounded w-full object-contain" priority />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-brand-accent font-semibold mb-2"># Our Vision & Values</h3>
          <h2 className="text-3xl font-bold mb-4">Driven By Purpose, Guided By Principles</h2>
          <p className="text-brand-light mb-6">
            To provide healthcare and well-being to our community by providing compassionate, high-quality dental solutions with integrity.
          </p>

          <div className="space-y-4">
            <div className="transition-all bg-brand-light/10 hover:bg-brand-light text-black hover:text-black p-4 rounded">
              <h4 className="font-bold mb-1">Mission</h4>
              <p className="text-sm">
                We aim to expand dental care by delivering outstanding service, staying at the forefront of technology, and focusing on patients emotional and physical well-being. Our mission is to provide affordable and quality dental services in an inclusive environment that celebrates diversity and prioritizes patient education.
              </p>
            </div>

            <div className="transition-all bg-brand-light/10 hover:bg-brand-light text-black hover:text-black p-4 rounded">
              <h4 className="font-bold mb-1">Vision</h4>
              <p className="text-sm">
                To create a world where everyone has access to reliable, compassionate, and innovative dental care. We envision a future where dental wellness is a standard for all, not a privilege for some.
              </p>
            </div>

            <div className="transition-all bg-brand-light/10 hover:bg-brand-light text-black hover:text-black p-4 rounded">
              <h4 className="font-bold mb-1">Values</h4>
              <p className="text-sm">
                We operate with deep compassion. We are purpose-driven, honest, and transparent in our work. We strive to empower communities through knowledge, care, and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="max-w-screen-xl mx-auto px-6 text-center mb-16">
        <h3 className="text-sm font-semibold text-brand-light uppercase mb-2">What We Do Best</h3>
        <h2 className="text-3xl font-bold mb-10">Top Dental Treatments, Delivered with Precision</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {['General Dentistry', 'Cosmetic Dentistry', 'Restorative Dentistry', 'Pediatric Dentistry'].map((title, index) => (
            <div key={index} className={`border p-6 rounded transition-all ${index === 1 ? 'bg-brand-light text-black' : 'hover:bg-brand-light/10'} text-center`}>
              <div className="mb-3">
                <div className="w-10 h-10 mx-auto rounded-full bg-white"></div>
              </div>
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-sm mb-3">Routine Check-ups, Cleanings, And Preventative Care To Enhance Oral Health</p>
              <button className="text-sm underline font-medium">Read more →</button>
            </div>
          ))}
        </div>

        <Link className="inline-block bg-brand-light text-black py-2 px-6 rounded font-medium" href="/services">
          View All Services
        </Link>
      </div>

      {/* Call to Action Section */}
      <div className="bg-black text-left py-10 px-6 md:px-20">
        <h3 className="text-sm font-semibold text-brand-light uppercase mb-1">Not Sure Where To Start?</h3>
        <h2 className="text-2xl font-bold mb-4">Let us help you with a personalized dental plan and quote.</h2>
        <Link className="inline-block bg-brand-light text-black py-2 px-6 rounded font-medium" href="/contact">
          Get Free Consultation
        </Link>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[400px] mb-20">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-full p-3 shadow-lg">
            <button className="text-black font-bold">▶</button>
          </div>
        </div>
        <Image
          src="/video-thumbnail.jpg"
          alt="Play Video"
          layout="fill"
          objectFit="cover"
          className="rounded-lg opacity-80"
          priority
        />
        <div className="absolute inset-0 flex items-end justify-center pb-10 z-10">
          <h2 className="text-4xl font-extrabold uppercase text-white">Play Video</h2>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-screen-xl mx-auto px-6 md:flex md:items-start md:gap-10 mb-24">
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <Image src="/why-choose-us.jpg" alt="Why Choose Us" width={400} height={400} className="rounded w-full object-cover" priority />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-brand-accent font-semibold mb-2"># Why Choose Us</h3>
          <h2 className="text-3xl font-bold mb-4">Excellence in Healthcare Rooted in Trust.</h2>
          <p className="text-brand-light mb-6">
            From international patients to returning local families, PrimeDent has been the top choice in dental excellence. We speak your language, embrace your diversity, and welcome you with compassion.
          </p>
          <ul className="text-brand-light text-sm list-disc pl-5 space-y-1">
            <li><strong>International Patient Focus</strong> – Bilingual speaking staff, tailored care, and discounted pricing.</li>
            <li><strong>Cutting-edge Technology</strong> – Digital dentistry, 3D imaging, and pain-free procedures.</li>
            <li><strong>Patient-centered Environment</strong> – Trained to reduce fear & anxiety with hospitality practices.</li>
            <li><strong>Transparent Pricing</strong> – No hidden costs, just honest, clear value.</li>
            <li><strong>Creative, Stress-Free Clinic Design</strong> – A welcoming, modern space in the heart of Izmir.</li>
          </ul>

          <div className="mt-6">
            <p className="font-semibold">⭐ <strong>(4.8)</strong> 120+ ratings on Google</p>
            <p className="font-semibold">🌟 <strong>(4.9)</strong> 100+ ratings on Trustpilot</p>
          </div>
        </div>
      </div>
    </div>
  )
}
