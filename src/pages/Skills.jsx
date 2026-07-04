
import { BsArrowUpRight } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
  <div className="skills mt-24 space-y-8">
          
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
      <div className="px-6 py-8 rounded-3xl border-[1px] border-[#f5f5f5]/40 w-full md:w-[65%] hover:border-[#f5f5f5]/60 transition-colors">
      <h1 className="text-lg opacity-80">Frontend</h1>
        <p className="mt-4 md:text-lg opacity-80">
          React.js / Next.js / Redux Toolkit / React Native / Tailwind CSS / HTML5 / CSS3 / Microfrontends
        </p>
      </div>
      <Link to='https://github.com/Shivam12Shah/' target='_blank' className="flex items-center gap-4 group cursor-pointer">
        <div className="border-[1px] border-[#f5f5f5] p-4 rounded-full group-hover:bg-[#f5f5f5] group-hover:text-[#121212] transition-colors">
          <FaGithub className="text-xl" />
        </div>
        <div className="text-[#121212] bg-[#f5f5f5] p-4 rounded-full group-hover:scale-110 transition-transform">
          <BsArrowUpRight className="text-xl" />
        </div>
      </Link>
    </div>

    <div className="px-6 py-6 text-[#f5f5f5] bg-[#121212] border-[1px] border-[#f5f5f5]/40 mt-12 rounded-3xl w-[90%]">
      <h1 className="text-lg opacity-80">Backend & APIs</h1>
      <p className="mt-4 md:text-lg opacity-80 pr-12">
       Express.js / RESTful APIs / GraphQL / WebSockets / JWT / OAuth 2.0 / API Gateway / Serverless
      </p>
    </div>

    <div className="flex items-center gap-6">
      <p className="w-[30%] text-sm">
        Extensive experience with various databases, cloud services, and CI/CD pipelines
      </p>
      <div className="px-6 py-6 mt-8 rounded-3xl border-[1px] border-[#f5f5f5]/40 w-[65%]">
        <h1 className="text-lg opacity-80">Databases & Architecture</h1>
        <p className="mt-2 md:text-lg opacity-80">
          MongoDB / PostgreSQL / MySQL / Redis / Microservices / Event-Driven Architecture / System Design
        </p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-8">
      <div className="px-6 py-8 rounded-3xl border-[1px] border-[#f5f5f5]/40 w-full md:w-[65%] hover:border-[#f5f5f5]/60 transition-colors">
      <h1 className="text-lg opacity-80">DevOps & Cloud</h1>
        <p className="mt-4 md:text-lg opacity-80">
            AWS (EC2, S3, Lambda, SQS) / Docker / Kubernetes / Apache Kafka / GitHub Actions / CI/CD Pipelines / Nginx
        </p>
      </div>
    </div>
    
    <div className="px-6 py-6 text-[#f5f5f5] bg-[#121212] border-[1px] border-[#f5f5f5]/40 mt-12 rounded-3xl w-[90%]">
      <h1 className="text-lg opacity-80">Languages & Testing</h1>
      <p className="mt-4 md:text-lg opacity-80 pr-12">
       JavaScript (ES6+) / TypeScript / Node.js / Java / Python / PHP / Jest / TDD / Git / Postman / Swagger / Scrum
      </p>
    </div>
  </div>
  )
}

export default Skills