import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Octaware Technologies – Hnak.com",
      role: "Software Engineer",
      location: "Bangalore, India",
      duration: "Sep 2024 – Present",
      achievements: [
        "API Performance: Improved API response times by 25% via Redis caching and MongoDB index optimization, increasing platform throughput under peak load.",
        "Microservices: Delivered Complimentary Gift feature using TypeScript and Express.js microservices, contributing to 14% drop in cart abandonment and 12% AOV growth.",
        "Frontend: Resolved React.js hydration and render-blocking issues with Tailwind CSS, improving render speed by 32% and organic SEO traffic by 18%.",
        "Automation: Built async job scheduler with PHP CLI cron in Docker containers, cutting API thread memory usage by 40%.",
        "Integrations: Automated inventory sync across 100,000+ SKUs via Vinculum ERP and Magento API.",
        "Event Streaming: Built Apache Kafka and GraphQL pipelines on AWS, processing 500,000+ daily events with 90% fewer data inconsistencies."
      ]
    },
    {
      company: "Sheryians Coding School",
      role: "Full Stack Developer",
      location: "Bhopal, India",
      duration: "Jul 2024 – Aug 2024",
      achievements: [
        "Component Library: Built React.js and Redux component library with GitHub Actions CI/CD pipelines, improving deployment speed by 15%.",
        "Security: Developed JWT and OAuth 2.0 auth middleware in Java, reducing unauthorized access incidents to zero."
      ]
    }
  ];

  return (
    <div className="experience mt-24 space-y-8">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">.../Experience</h1>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 md:p-8 rounded-3xl border-[1px] border-[#f5f5f5]/40 hover:border-[#f5f5f5]/60 transition-colors bg-[#1a1a1a]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold">{exp.role}</h2>
                <h3 className="text-lg text-[#f5f5f5]/80 mt-1">{exp.company} | {exp.location}</h3>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="px-4 py-2 border border-[#f5f5f5]/20 rounded-full text-sm">
                  {exp.duration}
                </span>
              </div>
            </div>
            
            <ul className="space-y-4 text-[#f5f5f5]/80 leading-relaxed">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f5f5f5]/60 flex-shrink-0"></span>
                  <span>
                    <strong className="text-[#f5f5f5] font-medium">{item.split(':')[0]}:</strong>
                    {item.split(':').slice(1).join(':')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
