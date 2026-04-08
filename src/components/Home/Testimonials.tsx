import React from "react";
import SectionWrapper from "../SectionWrapper";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Local Resident",
    content: "Best printing service in Arwal. Got my wedding cards printed here and everyone loved the quality and design.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Small Business Owner",
    content: "My laptop had a major motherboard issue. They fixed it within 2 days at a very reasonable price. Highly recommended!",
    rating: 5,
  },
  {
    name: "Suman Kumari",
    role: "Student",
    content: "Very helpful with online form filling and digital work. They are fast and make sure there are no errors.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" bgColor="gray">
      <div className="text-center space-y-6 mb-20 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
          Voices of <span className="text-primary italic">Arwal</span>
        </h2>
        <p className="text-zinc-500 text-lg font-medium leading-relaxed">
          Real feedback from local residents and business owners who trust us with their critical needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-10 rounded-3xl relative group soft-shadow hover:shadow-2xl transition-all duration-500 border border-zinc-50"
          >
            <Quote className="absolute top-10 right-10 w-12 h-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
            
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-zinc-200"}`} 
                />
              ))}
            </div>

            <p className="text-zinc-600 font-medium text-lg leading-relaxed mb-10 transition-colors italic">
              &quot;{testimonial.content}&quot;
            </p>

            <div className="flex items-center pt-8 border-t border-zinc-50">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary font-black text-xl shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                {testimonial.name[0]}
              </div>
              <div className="ml-5">
                <p className="font-black text-zinc-900 text-lg tracking-tight">{testimonial.name}</p>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
