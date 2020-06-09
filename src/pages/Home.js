import React from 'react';

const modules = [
  {
    name: 'CST4310 - Information Systems Quality Management',
    description:
      'This module is at the heart of software engineering quality management and aims to impart the knowledge and skills for the engineering, monitoring, and improving information systems. Engineering good quality software products benefits from a controlled and managed development process. Managing the complexity of organisations and the complexity and proliferation of information systems and their many failures demand specialised knowledge and skills. In particular, quality assurance engineers, project and systems managers and auditors need the knowledge and skills to monitor and assess both the software process and software artefacts in order to provide guidance and leadership for their improvement. The quality manager also needs to have the knowledge and skills for evaluation and selection of appropriate process models, methods, tools and human resources.',
    link: '/cst4310',
    color: 'red',
  },
  {
    name:
      'CST4320 - Regulation of Electronic Commerce and Information Technology',
    description:
      'This module focuses on the regulation of electronic commerce activities and associated technologies. It gives students an understanding of regulatory frameworks for electronic technologies and the underlying legal principles which govern electronic commerce. The module critically examines the role of regulation in the commercial context of electronic transactions and how such regulation applies to these transactions. Legal and regulatory issues related to intellectual property, conducting business online, privacy, jurisdiction are among topics covered. In addition to the above, the module covers regulation in the broader context of professional and ethical issues relevant to the use of information technology.',
    link: '/cst4320',
    color: 'green',
  },
  {
    name: 'CST4330 - Information System Strategy and Management',
    description:
      "The business strategy of an organisation should be supported by Information Systems (IS) and Information Technology (IT) strategy. In order to achieve this, developing IS should be part of an organisation's strategic planning. This module will explore major concepts, methods and technologies needed to develop business strategies for an organisation focusing on the Internet as the medium. Data management systems are now the central software of enterprise systems and the driving force behind e-commerce. This module will cover the fundamentals of managing industrial data. The aim of the module is to integrate theory and practice in a holistic manner. This module also aims to give students the knowledge of how to use and manage information systems to bring value to the organisation.",
    link: '/cst4330',
    color: 'blue',
  },
  {
    name: 'CST4350 - Knowledge Management Strategies',
    description:
      'To maintain competitive advantage in the knowledge economy, organisations need a knowledge management strategy. The aim of this module is to enable participants to draw upon the latest theory and practice in knowledge management to be able to assist organisations in developing knowledge management systems that nurture and exploit business, social and technological aspects of the organization.',
    link: '/cst4350',
    color: 'purple',
  },
];

const Home = () => (
  <div>
    <div className='shadow p-1 my-10 bg-orange-300 rounded-lg'>
      {/* intro */}
      <h1 className='text-2xl'>About Middlesex University (MDX)</h1>
      <ul>
        <li>
          <strong>Top modern university in the UK </strong>
          in Times Higher Young University Rankings (2019)
        </li>
        <li>
          <strong>Top modern uni in London </strong>
          for research funding (Research Excellence Framework 2014)
        </li>
        <li>
          <strong>Over 140 countries </strong>
          represented in the community of students and staff
        </li>
        <li className='flex justify-end my-5'>
          Learn More »
          <a
            className='font-bold underline hover:bg-orange-500 hover:text-white'
            href='https://www.mdx.ac.uk/courses/postgraduate'
          >
            Here
          </a>
          «
        </li>
      </ul>

      <hr className='mb-4' />

      <h1 className='text-2xl'>
        About Business Information Systems Management (BISM)!
      </h1>
      <p>
        Business information, and using it to increase profitability, is
        becoming an ever more essential part of running any organisation. This
        course will train you to design and develop information management
        systems and make the best use of them in the workplace – a highly
        sought-after skill in today's competitive market.
      </p>
      <span className='flex justify-end my-5'>
        Learn More »
        <a
          className='font-bold underline hover:bg-orange-500 hover:text-white'
          href='https://www.mdx.ac.uk/courses/postgraduate/business-information-systems-management'
        >
          Here
        </a>
        «
      </span>
    </div>

    <h1 className='text-2xl font-semibold'>Modules</h1>
    <div className='flex flex-wrap p-2'>
      {modules.map((module) => (
        <div className='p-2 md:w-1/2 w-full'>
          <div
            className={`p-4 bg-${module.color}-300 rounded shadow h-full flex flex-col`}
          >
            <h1 className='text-xl font-semibold mb-4'>{module.name}</h1>
            <p className='text-sm text-justify mb-auto'>{module.description}</p>
            <a
              className={`hover:bg-${module.color}-400 hover:text-${module.color}-800 hover:border-2 hover:border-${module.color}-800 bg-${module.color}-600 text-white font-semibold border-2 border-${module.color}-300 rounded px-2 py-1 w-1/2 mt-2 mx-auto`}
              href={module.link}
            >
              More
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
