import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Plus, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const testimonials = [
    {
      quote:
        "Integrating Dayzero AI's advanced agents into our quality check and customer support operations has been a game-changer for Habuild.",
      author: "Saurabh Bothra",
      role: "Founder & CEO - Habuild",
      image: "/images/whatpeoplesay.png",
    },
    {
      quote:
        "The AI employees have transformed how we handle customer support, making our operations more efficient and responsive.",
      author: "John Smith",
      role: "CTO - TechCorp",
      image: "/images/whatpeoplesay.png",
    },
    {
      quote:
        "Dayzero has revolutionized our workflow. The AI agents are incredibly efficient and accurate.",
      author: "Sarah Johnson",
      role: "Head of Operations - InnovateCo",
      image: "/images/whatpeoplesay.png",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-3 bg-transparent">
  <div className="max-w-7xl mx-auto">
    <div className="bg-black/20 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-medium text-white">dayzero</div>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation Links (Centered on larger screens) */}
      <div className="flex-1 hidden md:flex justify-center">
        <div className="flex items-center gap-10">
          <div className="group relative">
            <button className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
              <span>Employees</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
              <span>Products</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <a href="#" className="text-white/90 hover:text-white transition-colors">
            AI For Good
          </a>
          <a href="#" className="text-white/90 hover:text-white transition-colors">
            About
          </a>
        </div>
      </div>

      {/* Talk to us button (Right Side) */}
      <div className="hidden md:block">
        <button className="bg-white hover:bg-gray-100 transition-colors text-black px-5 py-2 rounded-xl text-sm font-medium">
          Talk to us
        </button>
      </div>
    </div>

    {/* Mobile Menu (Appears when isOpen is true) */}
    {isOpen && (
      <div className="absolute top-14 left-0 w-full bg-black/90 p-4 flex flex-col gap-4 md:hidden">
        <a href="#" className="text-white/90 hover:text-white transition-colors">
          Employees
        </a>
        <a href="#" className="text-white/90 hover:text-white transition-colors">
          Products
        </a>
        <a href="#" className="text-white/90 hover:text-white transition-colors">
          AI For Good
        </a>
        <a href="#" className="text-white/90 hover:text-white transition-colors">
          About
        </a>
        <button className="bg-white hover:bg-gray-100 transition-colors text-black px-5 py-2 rounded-xl text-sm font-medium">
          Talk to us
        </button>
      </div>
    )}
  </div>
</nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen px-4 md:px-6 bg-[url('/images/Hero-image.png')] bg-cover bg-center">
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="max-w-7xl mx-auto sm:pt-48 pt-32 relative">
    <h1 className="text-4xl sm:text-[86px] leading-[1.1] font-bold text-white mb-6">
      AI Employees,
      <br />
      Real Results
    </h1>
    <p className="text-lg sm:text-xl text-white/90 mb-8">
      For Marketing, Product & Business Operation teams
    </p>
    <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium">
      Talk to us
    </button>

    {/* Scrolling Partner Logos */}
    <div className="mt-20 sm:mt-32 overflow-hidden whitespace-nowrap relative">
      <div className="flex space-x-10 sm:space-x-12 animate-marquee">
        <img src="/images/Schbang.png" alt="Schbang" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/lenskart.png" alt="Lenskart" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/accenture.png" alt="Accenture" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/emblem.png" alt="Emblem" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/microsoft.png" alt="Microsoft" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/HardwardBusiness.png" alt="Harvard Business" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/Paytm.png" alt="Paytm" className="h-10 sm:h-12 brightness-200 opacity-100" />
        {/* Duplicate for smooth infinite scrolling */}
        <img src="/images/Schbang.png" alt="Schbang" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/lenskart.png" alt="Lenskart" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/accenture.png" alt="Accenture" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/emblem.png" alt="Emblem" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/microsoft.png" alt="Microsoft" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/HardwardBusiness.png" alt="Harvard Business" className="h-10 sm:h-12 brightness-200 opacity-100" />
        <img src="/images/Paytm.png" alt="Paytm" className="h-10 sm:h-12 brightness-200 opacity-100" />
      </div>
    </div>
  </div>
</section>



      {/* AI Employees Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
              24/7 AI WORKERS
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-4">
              Meet Our AI Employees
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our digital workers don't just automate tasks – they transform
              your business. With 24/7 operations.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-gray-900 transition-colors">
              View All Agents
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sam - Product Manager */}
            <div className="bg-white rounded-3xl overflow-hidden ">
              <div className="w-full h-[26rem] bg-[url('/images/Sam.png')] bg-cover bg-center rounded-t-3xl"></div>
              <div className="p-6">
                <h3 className="text-lg sm:text-base md:text-lg text-gray-900 mb-2">
                  Sam - Product Manager
                </h3>
                <p className="text-gray-600 sm:text-sm md:text-base mb-4">
                  Sam turns your vision into reality. She aligns teams,
                  prioritizes features, and ensures seamless execution.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 font-medium"
                >
                  Hire Sam
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* David - CS Agent */}
            <div className="bg-white rounded-3xl overflow-hidden ">
              <div className="w-full h-[26rem] bg-[url('/images/David.png')] bg-cover bg-center rounded-t-3xl"></div>
              <div className="p-6">
                <h3 className="text-lg sm:text-base md:text-lg text-gray-900 mb-2">
                  David - CS Agent
                </h3>
                <p className="text-gray-600 sm:text-sm md:text-base mb-4">
                  John is your 24/7 problem-solver, delivering fast, reliable,
                  and seamless support.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 font-medium"
                >
                  Hire David
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Greg - Market Researcher */}
            <div className="bg-white rounded-3xl overflow-hidden ">
              <div className="w-full h-[26rem] bg-[url('/images/Greg.png')] bg-cover bg-center rounded-t-3xl"></div>
              <div className="p-6">
                <h3 className="text-lg sm:text-base md:text-lg text-gray-900 mb-2">
                  Greg - Market Researcher
                </h3>
                <p className="text-gray-600 sm:text-sm md:text-base mb-4">
                  Alex drives growth by identifying leads, nurturing prospects,
                  and creating new opportunities.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 font-medium"
                >
                  Hire Greg
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Structure Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase block mb-2">
              MULTI AGENT
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Who Work As A Team
            </h2>
            <p className="text-lg text-gray-400 mx-auto mt-3 leading-none whitespace-wrap">
              Our digital workers don't just automate tasks – they have
              multilingual capabilities, and human-like.
            </p>
          </div>

          {/* Team Network Diagram */}
          <div
            className="relative w-full h-[600px] rounded-2xl mb-24 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/Teamwork.png')" }}
          ></div>

          {/* Quote Section */}
          <div className="max-w-4xl mx-auto text-left p-6">
            <div className="text-[100px] text-blue-300 leading-none mb-6">
              “
            </div>
            <blockquote className="text-5xl font-semibold text-gray-500 leading-snug mb-8">
              AI employees will become our digital assistants, helping us
              navigate the complexities of the modern world. They will make our
              lives easier and more efficient.
            </blockquote>
            <div className="flex items-center text-2xl">
              <span className="font-bold text-black">Jeff Bezos</span>
              <span className="mx-2 text-gray-400">-</span>
              <span className="text-gray-400">Founder & CEO, Amazon</span>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <span className="text-sm font-medium tracking-wider text-gray-500 uppercase block text-center">
            FEATURES
          </span>
          <h2 className="text-4xl font-bold text-center mt-4 mb-2">
            Intelligently Automate Anything
          </h2>
          <p className="text-gray-600 text-center mb-16">
            Empower every corner of your business with AI agents that don't just
            assist—they act on your behalf
          </p>

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-12">
            {/* Easily Customizable */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:col-span-2 flex flex-col justify-between">
              <div
                className="bg-gray-50 rounded-xl mb-6 aspect-[4/3] bg-no-repeat bg-contain bg-center"
                style={{
                  backgroundImage: "url('/images/Easycustomizable.png')",
                }}
              />
              <h3 className="text-xl font-bold mb-2">Easily Customizable</h3>
              <p className="text-gray-600">
                Build a lasting and contextual memory, transforming past
                insights to future performance
              </p>
            </div>

            {/* 24/7 Availability */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:col-span-3 flex flex-col justify-between">
              <div
                className="bg-gray-50 rounded-xl mb-6 aspect-[16/9] bg-no-repeat bg-contain bg-center"
                style={{ backgroundImage: "url('/images/247Availablity.png')" }}
              />
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Always active, always responsive—working round the clock to
                drive productivity without downtime
              </p>
            </div>

            {/* Adaptive Learning */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:col-span-1 flex flex-col justify-between">
              <div
                className="bg-gray-50 rounded-xl mb-6 aspect-[3/4] bg-no-repeat bg-contain bg-center"
                style={{
                  backgroundImage: "url('/images/Adaptivelearning.png')",
                }}
              />
              <h3 className="text-xl font-bold mb-2">Adaptive Learning</h3>
              <p className="text-gray-600">
                Learn once, adapt forever—improve with feedback
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Integrate into Existing Systems */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:col-span-3 flex flex-col justify-between">
              <div
                className="bg-gray-50 rounded-xl mb-6 aspect-[16/7] bg-no-repeat bg-contain bg-center"
                style={{
                  backgroundImage: "url('/images/Integratesystem.png')",
                }}
              />
              <h3 className="text-xl font-bold mb-2">
                Integrate into Existing Systems
              </h3>
              <p className="text-gray-600">
                Deploy locally, or on the cloud. We support your organization in
                seamlessly introducing employees to your ecosystem
              </p>
            </div>

            {/* Expertise On Demand */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:col-span-2 flex flex-col justify-between">
              <div
                className="bg-gray-50 rounded-xl mb-6 aspect-square bg-no-repeat bg-contain bg-center"
                style={{
                  backgroundImage: "url('/images/Expertiseondemand.png')",
                }}
              />
              <h3 className="text-xl font-bold mb-2">Expertise On Demand</h3>
              <p className="text-gray-600">
                Access a highly skilled employees with expertise in all domains,
                always up-to-date with the industry latest standards
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* For Every Non-Tech User Section */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Heading */}
          <h2 className="text-5xl font-semibold mb-4 text-gray-900">
            For Every Non-Tech User In The Enterprise
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Looking for AI employees that seamlessly integrate into your
            workflow? Whether you're an enterprise automating processes or a
            business leader optimizing operations, Dayzero is your solution.
          </p>

          {/* Central Image */}
          <div className="flex justify-center mb-16">
            <img
              src="/images/enterprise-diagram.png"
              alt="Enterprise AI Integration"
              className="w-full max-w-5xl"
            />
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {/* Enterprise Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                For Enterprise
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center text-lg">
                  <CheckCircle className="text-white-500 mr-3" />
                  Deploy AI employees for specific roles and tasks
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle className="text-white-500 mr-3" />
                  Automate workflows with precision and efficiency
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle className="text-white-500 mr-3" />
                  Scale operations without increasing headcount
                </li>
              </ul>
            </div>

            {/* Business Users Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                For Business Users
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center text-lg">
                  <CheckCircle className="text-white-500 mr-3" />
                  Get AI-powered assistants tailored to your business needs
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle className="text-white-500 mr-3" />
                  Enhance productivity with intelligent automation
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle className="text-white-500 mr-3" />
                  Ensure seamless integration with existing systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* What People Say Section */}(
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
              TESTIMONIAL
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-2">What People Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover what our satisfied customers have to say about their
              experiences with our products/services
            </p>
          </div>

          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Testimonial Cards Container */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
                      {/* Left Text Section */}
                      <div className="w-full lg:w-[65%] p-6 md:p-10 lg:p-12">
                        <div className="text-[60px] md:text-[80px] text-gray-200 mb-4 md:mb-6 leading-none">
                          &ldquo;
                        </div>
                        <p className="text-[22px] md:text-[26px] lg:text-[30px] font-bold text-gray-800 mb-6 md:mb-8 leading-snug">
                          {testimonial.quote}
                        </p>
                        <div>
                          <p className="font-semibold text-[16px] md:text-[18px] text-black">
                            {testimonial.author}
                          </p>
                          <p className="text-[14px] md:text-[15px] text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Right Image Section */}
                      <div className="w-full lg:w-[35%] h-[300px] lg:h-auto">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentTestimonial === index ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Integration Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
            UNIFIED SOLUTIONS
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-2">
            Enterprise - Ready Integrations
          </h2>
          <p className="text-gray-600 mb-16">Seamless connectivity</p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
            {/* Feature Card */}
            {[
              {
                title: "100+ LLMS",
                desc: "Explore and integrate a wide range of advanced large language models seamlessly",
                img: "/images/enterpriseready/100+llms.png",
              },
              {
                title: "Cloud Agnostic",
                desc: "Deploy effortlessly across AWS, Google Cloud, Azure, and multiple cloud environments",
                img: "/images/enterpriseready/Cloudagnostic.png",
              },
              {
                title: "Enterprise Connectivity",
                desc: "Seamlessly integrate with CRM, ERP, and essential enterprise tools that matters to you",
                img: "/images/enterpriseready/Enterprieconnectivity.png",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-300 flex flex-col p-4 md:p-6"
              >
                <div className="w-full mb-4">
                  <div
                    className="w-full h-[220px] md:h-[400px] bg-contain bg-no-repeat bg-left rounded-xl"
                    style={{ backgroundImage: `url('${card.img}')` }}
                  ></div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Small feture cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[
              {
                name: "Mixtral 8×7B",
                type: "Chat",
                image: "/images/enterpriseready/Mixteral8x7b.png",
              },
              {
                name: "Llama 3.1 70B",
                type: "Chat",
                image: "/images/enterpriseready/Llama.png",
              },
              {
                name: "Llama 3.1 40.5B",
                type: "Chat",
                image: "/images/enterpriseready/Llama.png",
              },
              {
                name: "Mixtral 8×22B",
                type: "Chat",
                image: "/images/enterpriseready/Mixteral8x7b.png",
              },
              {
                name: "DeepSeek R1",
                type: "Chat",
                image: "/images/enterpriseready/Deepseek.png",
              },
              {
                name: "Gemma 2.27B",
                type: "Chat",
                image: "/images/enterpriseready/Gemma.png",
              },
              {
                name: "Codellama 34B",
                type: "Chat",
                image: "/images/enterpriseready/Llama.png",
              },
              {
                name: "DeepSeek V3",
                type: "Chat",
                image: "/images/enterpriseready/Deepseek.png",
              },
              {
                name: "DeepSeek Coder",
                type: "Chat",
                image: "/images/enterpriseready/Deepseek.png",
              },
              { name: "and more!", type: "100+ LLMs supported", isLast: true },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl border border-gray-300 flex flex-col justify-start items-start aspect-[9/5] "
              >
                {item.isLast ? (
                  <Plus className="w-8 h-8 text-gray-500 mb-4" />
                ) : (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-contain mb-4"
                  />
                )}
                <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-1">
                  {item.name}
                </h4>
                <p className="text-sm md:text-base text-gray-500">
                  {item.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Early Believers Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
            INVESTORS
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-2">Early Believers</h2>
          <p className="text-gray-600 mb-16">Backing us since day zero</p>

          {/* Early Believers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              {
                name: "Amit Chaudhary",
                title: "Cofounder, Lenskart",
                image: "/images/Investors/Amit.png",
              },
              {
                name: "Neeraj Sahejpal",
                title: "VP, Qualcomm",
                image: "/images/Investors/Neeraj.png",
              },
              {
                name: "Sailesh Hedge",
                title: "CEO, Hubilio",
                image: "/images/Investors/Sailesh.png",
              },
              {
                name: "Prasanna Krishnamoorthy",
                title: "Managing Partner Upekkha",
                image: "/images/Investors/Prasanna.png",
              },
            ].map((person, index) => (
              <div key={index} className="flex flex-col w-full h-auto">
                <div className="w-full h-full md:h-full rounded-3xl overflow-hidden mb-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-72 object-contain"
                  />
                </div>
                <div className="text-left flex flex-col justify-start px-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {person.name}
                  </h3>
                  <p className="text-blue-600 text-sm md:text-base">
                    {person.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            <div className="h-20 bg-[url('/images/Investors/Upekkha.png')] bg-no-repeat bg-contain bg-center"></div>
            <div className="h-20 bg-[url('/images/Investors/Seed.png')] bg-no-repeat bg-contain bg-center"></div>
            <div className="h-20 bg-[url('/images/Investors/Microsoft.png')] bg-no-repeat bg-contain bg-center"></div>
            <div className="h-20 bg-[url('/images/Investors/Ministry.png')] bg-no-repeat bg-contain bg-center"></div>
            <div className="h-20 bg-[url('/images/Investors/IIM.png')] bg-no-repeat bg-contain bg-center"></div>
            <div className="h-20 bg-[url('/images/Investors/Razorpay.png')] bg-no-repeat bg-contain bg-center"></div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#111] text-white relative overflow-hidden">
        {/* Background Large Text */}
        <h1 className="absolute inset-0 text-[200px] md:text-[300px] lg:text-[400px] font-bold text-gray-900 opacity-10 text-center -z-10">
          Dayzero
        </h1>

        {/* Top Border Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
          {/* Main Content */}
          <div className="mb-32">
            {/* Title and Logo */}
            <div className="mb-24">
              <h2 className="text-[42px] font-medium leading-tight mb-6">
                We're Redefining the
                <br />
                Future of Work
              </h2>
              <div className="text-2xl text-gray-400 font-light">Dayzero</div>
            </div>

            {/* Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
              <div>
                <h4 className="text-sm font-medium mb-6">Products</h4>
                <ul className="space-y-4 text-[15px] text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Faith
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Worx
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Briefly
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-6">AI Employee</h4>
                <ul className="space-y-4 text-[15px] text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Sara - Product Manager
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Alex - BDR
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      View more
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-6">Resources</h4>
                <ul className="space-y-4 text-[15px] text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Tutorials
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-6">Company</h4>
                <ul className="space-y-4 text-[15px] text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Line with Diamond Edge */}
          <div className="relative flex items-center justify-center my-8">
            <div className="flex-grow border-t border-gray-600"></div>
            <div className="mx-4 text-gray-600">◆</div>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2024 Dayzero Inc. All rights reserved. All wrongs reversed.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 6.163c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743A11.65 11.65 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
