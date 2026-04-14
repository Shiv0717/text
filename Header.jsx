"use client";


import { ChevronRight, Home, Building2, GraduationCap, Users, Calendar, Award, Globe } from "lucide-react";

export default function BreadcrumbSection() {
  return (
    <div className="bg-white border-b border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb Navigation - Larger */}
        <nav className="flex flex-wrap items-center gap-3 text-base">
          <a 
            href="/" 
            className="flex items-center gap-2 text-gray-500 hover:text-[#1E2A5E] transition-colors font-medium"
          >
            <Home size={16} />
            <span>Home</span>
          </a>
          <ChevronRight size={14} className="text-gray-400" />
          <a 
            href="/about" 
            className="text-gray-500 hover:text-[#1E2A5E] transition-colors font-medium"
          >
            About
          </a>
          <ChevronRight size={14} className="text-gray-400" />
          <a 
            href="/about/university" 
            className="text-gray-500 hover:text-[#1E2A5E] transition-colors font-medium"
          >
            University
          </a>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-[#1E2A5E] font-bold text-base">Overview & History</span>
        </nav>

        {/* Page Title - Bigger */}
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1435] mb-4 leading-tight">
            University Overview
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Discover our rich history, mission, and commitment to academic excellence 
            spanning over 150 years of educational leadership.
          </p>
        </div>

        {/* Quick Stats Row - Bigger cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group">
            <div className="w-12 h-12 bg-[#1E2A5E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1E2A5E] transition-colors">
              <Building2 size={22} className="text-[#1E2A5E] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-bold text-2xl text-[#0A1435]">Est. 1872</div>
              <div className="text-sm text-gray-400">Founded</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group">
            <div className="w-12 h-12 bg-[#1E2A5E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1E2A5E] transition-colors">
              <GraduationCap size={22} className="text-[#1E2A5E] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-bold text-2xl text-[#0A1435]">15,284+</div>
              <div className="text-sm text-gray-400">Current Students</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group">
            <div className="w-12 h-12 bg-[#1E2A5E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1E2A5E] transition-colors">
              <Users size={22} className="text-[#1E2A5E] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-bold text-2xl text-[#0A1435]">50,000+</div>
              <div className="text-sm text-gray-400">Global Alumni</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group">
            <div className="w-12 h-12 bg-[#1E2A5E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1E2A5E] transition-colors">
              <Calendar size={22} className="text-[#1E2A5E] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-bold text-2xl text-[#0A1435]">120+</div>
              <div className="text-sm text-gray-400">Academic Programs</div>
            </div>
          </div>
        </div>

        {/* Additional Stats Row - New */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group">
            <div className="w-12 h-12 bg-[#1E2A5E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1E2A5E] transition-colors">
              <Award size={22} className="text-[#1E2A5E] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-bold text-xl text-[#0A1435]">NAAC A++</div>
              <div className="text-sm text-gray-400">Grade</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group">
            <div className="w-12 h-12 bg-[#1E2A5E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1E2A5E] transition-colors">
              <Globe size={22} className="text-[#1E2A5E] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-bold text-xl text-[#0A1435]">68+</div>
              <div className="text-sm text-gray-400">Partner Countries</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition group">
            <div className="w-12 h-12 bg-[#1E2A5E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1E2A5E] transition-colors">
              <GraduationCap size={22} className="text-[#1E2A5E] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="font-bold text-xl text-[#0A1435]">98%</div>
              <div className="text-sm text-gray-400">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}