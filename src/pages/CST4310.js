import React from 'react';

const answer1 =
  'From a systems development lifecycle perspective, an agile method, like SCRUM, follows the iterative approach while the waterfall method follows a linear method. This has implications in other areas and leads to important differences in project management. It’s also worth noting that one is not necessarily worse than the other: they simply have different use cases.\nTime & Risk management\nIn SCRUM, the non-frozen requirements allow customers to make changes to the project after it has started development. Requirements priorities are decided on each sprint. This makes it difficult to identify an end date for the project. However, it also makes the project management process more flexible with little risk of failure.\nThe frozen requirements at the start of a project using the Waterfall method can lead to re-negotiations and then to a change control board at the end of the project. The rigid requirements as well as start and endpoints of each stage of the waterfall enforce discipline and make it easy to manage time effectively. However, this also makes the project management process less flexible with a higher risk of failure.\nCost management\nSince SCRUM allows customers to make changes to the project after it has started, more resources may be required after the project has started which increases the cost of the project. However, the iterative approach also means that changes to project scope are easier to implement and less costly. The waterfall method is less flexible, and because of its linear approach to systems development, changes to project scope are harder to implement once development has started. The advantage is that when requirements do not change, there are no financial surprises and the cost of the project is well managed.\nScope Management\nIn SCRUM, there is no project manager and therefore the project management tasks are the responsibility of the Team. The team allocates its own work. However, in Waterfall, there is a project manager and that person is responsible for allocating tasks to the system development team.\nCustomer Involvement\nIn SCRUM, the customer is the product owner and is continually liaising with the team. The customer determines work priorities and approves deliverables every sprint. When using the Waterfall method however the customer agrees to the requirements at the beginning. Everything is done and the customer sees the deliverable of the complete project. The customer is only involved at the start and end of the project.\nQuality management\nQuality can be defined in terms of design, conformance to requirements, and fitness for purpose. SCRUM manages quality effectively thanks to continuous customer involvement and especially ensures fitness for purposes through user stories. The waterfall method is very good for conformance to requirements but lacks in terms of design and fitness for purpose because the customer is only involved at the beginning and conclusion of the project.\nBenefits management\nThere is daily visibility of progress by the SCRUM team through daily SCRUM meetings and each sprint the customer can monitor progress and give feedback. This means that there are more benefits for the team and the product owner, respectively getting and giving feedback on working products rather than technical specifications. The project manager in Waterfall projects relies on progress reports/reviews to know how the project is progressing. The customer also has no visibility and no ability to gove feedback until the end of the project. This means that the project is less flexible and cannot take advantage of the benefits provided by customer feedback.\nDiscussion of how the four high-level values of the Agile Manifesto contribute to capturing the difference between agile and waterfall.\nWhile there is value on the items on the right, agile practitioners value the items on the left more \nindividuals and interactions over processes and tools;\nA project using an agile method differs from a project using a traditional waterfall method in the focus on individuals and interactions over processes and tools. A project using agile has no managers. Instead, the team is self-organized, with 2 to 7 crossfunctional people that interact daily until the project is over. The interactions are no limited to only the team either. A project using agile continuously involves the customer as the product owner. On the other hand, a project using a traditional waterfall method has a manager and only involves the customer at the start and end of the project.\nworking software over comprehensive documentation;\nA project using agile works in short time-boxed events called sprints. At the end of these sprints, that last from a few days up to a month, the team delivers a potentially shippable product. This means that very early, the agile team has a working software whereas the waterfall team is more focused on progress reports and design, coding, and testing documentation.\ncustomer collaboration over contract negotiation; and\nThe nature of projects using an agile method ensures collaboration with the customer at every step of the way. The frozen requirements of projects using the waterfall method lead to contract negotiations or even re-negotiations if the scope of the project changes.\nresponding to change over following a plan.\nProjects using the agile method are more flexible than projects using the waterfall method. This is mainly because the agile method allows customers to make changes even after the project has started development.';

const contents = [
  {
    question:
      'Explain how a project using Scrum (an agile method) differs from a project using a traditional waterfall method. Specifically discuss the following aspects:  \n• Time management \n• Cost management \n• Scope management \n• Customer involvement \n• Quality management \n• Risk management \n• Benefits management. \nAlso discuss how the four principles of the Agile Manifesto contribute to capturing the difference.',
    answer: answer1,
  },
  { question: 'Question 4', answer: 'answer 4' },
  { question: 'Question 2', answer: 'answer 2' },
  { question: 'Question 3', answer: 'answer 3' },
];

const CST4310 = () => (
  <div>
    <h1 className='text-2xl mt-4 mb-10 font-semibold'>
      CST4310 - Information Systems Quality Management
    </h1>

    {contents.map((content) => (
      <div className='shadow p-1 mb-5 bg-orange-100 rounded-lg'>
        <strong>{content.question}</strong>
        <hr className='my-2' />
        <p>{content.answer}</p>
      </div>
    ))}
  </div>
);

export default CST4310;