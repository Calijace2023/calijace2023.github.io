export const profile = {
  name: 'Calvin E. Cabungcal',
  title: 'Python Developer | Full-Stack Web Developer',
  location: 'Henderson, Nevada, United States',
  email: 'calvin.cabungcal1212@gmail.com',
  github: 'https://github.com/Calijace2023',
  githubHandle: '@Calijace2023',
  summary:
    "Dynamic Python developer with 3 years of hands-on software experience in automation, UI/UX development, and full-stack web engineering using React, JavaScript, TypeScript, and modern backend frameworks. Skilled in building scalable, data-driven applications and optimized backend systems with Python, Flask, Django, FastAPI, SQL databases, and cloud platforms like AWS and Azure. Backed by 14 years of engineering and industrial automation experience, bringing a rare mix of software craft and real-world systems thinking to every build.",
  stats: [
    { label: 'YEARS SOFTWARE DEV', value: '3' },
    { label: 'YEARS ENGINEERING', value: '14' },
    { label: 'FOCUS', value: 'PYTHON / REACT' },
    { label: 'STATUS', value: 'OPEN TO ROLES' },
  ],
}

export type SkillGroup = { group: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  {
    group: 'UI / UX Development',
    items: ['JavaScript', 'TypeScript', 'React JS', 'Figma', 'Bootstrap', 'Tailwind', 'Material UI', 'Jest'],
  },
  {
    group: 'Backend Development',
    items: ['Python', 'Node JS', 'Django', 'Flask', 'FastAPI', 'REST API', 'GraphQL', 'ORMs', 'JWT / OAuth', 'Async'],
  },
  {
    group: 'Cloud & Infrastructure',
    items: ['AWS (EC2 / S3 / Lambda)', 'Azure', 'Docker', 'Terraform', 'Ansible', 'CI/CD', 'Splunk'],
  },
  {
    group: 'AI & Computer Vision',
    items: ['OpenCV', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Predictive Maintenance ML'],
  },
  {
    group: 'Industrial Automation',
    items: ['PLC (Siemens / Omron / Allen-Bradley)', 'SCADA', 'HMI', 'MQTT', 'OPC-UA', 'IoT', 'Embedded Systems'],
  },
  {
    group: 'Tools & Platforms',
    items: ['Git', 'VS Code', 'PyCharm', 'Jira', 'Azure DevOps', 'SolidWorks', 'AutoCAD'],
  },
]

export type ExperienceItem = {
  role: string
  company: string
  period: string
  bullets: string[]
  stack: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full Stack Developer / Python',
    company: 'Accenture Incorporated — Philippines',
    period: '12/2024 – 06/2026',
    bullets: [
      'Delivered end-to-end web applications with JavaScript/TypeScript, React, and Python, improving system performance and UX across platforms.',
      'Built and optimized RESTful APIs, reducing response time and increasing backend reliability for high-traffic applications.',
      'Transformed Figma designs into responsive UI components, accelerating front-end delivery and design consistency.',
      'Deployed serverless solutions on AWS Lambda, S3, and DynamoDB, cutting infrastructure cost and improving scalability.',
      'Managed sprint execution with Jira and Azure DevOps, improving team velocity and on-time delivery.',
      'Automated business processes using Power Automate, eliminating repetitive tasks and improving operational efficiency.',
      'Used AI-assisted tools to streamline documentation, improving clarity and reducing time spent on technical writing.',
      'Leveraged Microsoft 365 Copilot and Claude AI to accelerate coding, documentation, and testing, reducing development cycle time.',
    ],
    stack: ['React', 'TypeScript', 'Python', 'AWS Lambda', 'DynamoDB', 'Jira', 'Azure DevOps', 'Power Automate', 'Microsoft 365 Copilot', 'Claude AI'],
  },
  {
    role: 'Senior Engineer — Automation Engineer / Python Developer',
    company: 'Denso Ten Philippines Corporation',
    period: '10/2019 – 11/2024',
    bullets: [
      'Extracted real-time telemetry from PLCs and assembly equipment using MQTT and OPC-UA protocols.',
      'Deployed edge applications to process factory sensor data locally before cloud transmission.',
      'Built backend infrastructure supporting predictive-maintenance ML models.',
      'Developed automated visual inspection systems for assembly-line quality control using OpenCV and PyTorch.',
      'Scripted driving simulations to test physical car components without a test track.',
      'Automated engineering workflows, including data parsing and reporting for mechanical and electrical teams.',
    ],
    stack: [
      'Python',
      'Django',
      'Flask',
      'FastAPI',
      'MQTT',
      'OPC-UA',
      'PySerial',
      'OpenCV',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Docker',
      'AWS/Azure',
      'CI/CD',
      'PLC (Siemens / Omron / Allen-Bradley)',
    ],
  },
  {
    role: 'Senior Supervisor — Business Development (SMT)',
    company: 'Mobilecycle Technologies Incorporated — Philippines',
    period: '03/2019 – 09/2019',
    bullets: [
      'Won new business and built products, systems, and equipment for internal use and client needs.',
      'Drove sales calls and business development alongside the President/CEO.',
      'Led process engineering, line maintenance, facilities, and NPI to keep operations running.',
    ],
    stack: ['Process Engineering', 'Business Development'],
  },
  {
    role: 'Process Engineering 2 — Wirebond / Die Attach',
    company: 'Tong Hsing Electronics Philippines Incorporated',
    period: '09/2018 – 02/2019',
    bullets: [
      'Optimized production yield and cut cycle time.',
      'Ensured smooth shift handoffs with the previous Group Leader.',
      'Reported machine status each shift to keep lines running.',
      'Evaluated raw materials (lead frames, bendability, die shears, wire pull) for quality.',
      'Led SPC operators and monitored daily measurements to hold spec.',
      'Prepared daily SPC reports to flag and correct out-of-control specs.',
    ],
    stack: ['SPC', 'Process Improvement'],
  },
  {
    role: 'Senior Design Engineer — Automation',
    company: 'Jan David Technologies Incorporated — Philippines',
    period: '02/2017 – 09/2018',
    bullets: [
      'Proposed design concepts matched to customer requirements and led the design team.',
      'Managed materials, parts, timelines, and delivery to keep projects on track.',
      'Presented designs and demoed prototypes to win client approval.',
      'Evaluated function, safety, and appearance for market-ready designs.',
      'Supervised fabrication staff to deliver each design on time.',
    ],
    stack: ['SolidWorks', 'Autodesk Inventor', 'SketchUp', 'AutoCAD', 'PLC Programming', 'System Integration'],
  },
  {
    role: 'Manufacturing Engineering 2 — Automation Integrator',
    company: 'Testech Incorporated — Philippines',
    period: '05/2013 – 01/2017',
    bullets: [
      'Won and developed new business to grow the business unit.',
      'Delivered automation solutions that cut manual effort and streamlined manufacturing processes.',
      'Lifted process capability and output while raising quality.',
      'Ran time studies to pinpoint and remove bottlenecks.',
      'Built systems that optimized every phase of production.',
    ],
    stack: ['SolidWorks', 'Autodesk Inventor', 'SketchUp + Vray', 'AutoCAD', 'Photoshop', 'PLC Programming', 'TS16949 Core Tools'],
  },
  {
    role: 'Assistant Production Supervisor — Car Carpet Molding',
    company: 'Form Asia Incorporated — Philippines',
    period: '06/2010 – 10/2012',
    bullets: [
      'Produced and revised production drawings to keep builds on correct specification.',
      'Finalized sketches to prevent downstream assembly errors.',
      'Standardized drafting guidelines for cross-project consistency.',
      'Converted drawings into a searchable catalogue for faster reuse.',
      'Coordinated drawings across teams to accelerate approvals.',
    ],
    stack: ['AutoCAD', 'CATIA', 'Autodesk Inventor', 'Leadership', 'Production Planning', 'Collaboration'],
  },
]

export const education = {
  degree: 'Bachelor of Science, Electronics Engineering (BSECE)',
  school: 'University of Perpetual Help System DALTA',
  year: '2013',
}

export const certifications = [
  'Python AI Developer — MIMO (2025)',
  'The Complete Web Development Course (2024)',
  'Modern Front-end Web Development (2024)',
  'Responsive Web Design — freeCodeCamp (2024)',
  '100 Days of Code: The Complete Python Pro Bootcamp (2023)',
  'Python Testing with Pytest and Selenium (2022)',
  'DevOps using Jenkins (2022)',
  'Full Stack Web Development with React, Angular and Node JS (2022)',
  'Developing Front-end Applications with React (2021)',
  'Back-end Web Development (2021)',
  'Database Structure and Management with MySQL (2020)',
  'Introduction to Relational Databases — RDBMS (2020)',
  'The Python Mega Course: Build 10 Real World Applications (2020)',
]

export type Project = {
  name: string
  status: 'LIVE' | 'CONCEPT'
  description: string
  stack: string[]
  repoUrl?: string
  liveUrl?: string
  details: string[]
}

export const projects: Project[] = [
  {
    name: 'PLC Telemetry Dashboard',
    status: 'LIVE',
    description:
      'A real-time dashboard streaming machine telemetry from PLCs over MQTT/OPC-UA into a FastAPI backend and a React front end.',
    stack: ['Python', 'FastAPI', 'MQTT', 'OPC-UA', 'React', 'WebSockets', 'Docker'],
    repoUrl: 'https://github.com/Calijace2023/plc-telemetry-dashboard',
    details: [
      'Mirrors production telemetry work from Denso Ten — pulling live sensor data off the factory floor.',
      'A simulator publishes synthetic PLC readings over MQTT; FastAPI subscribes, then fans them out to the React dashboard over a WebSocket.',
      'Zero-dependency local dev via an embedded MQTT broker, plus a Docker Compose path with a real Mosquitto broker for a production-like setup.',
      'Designed as the software layer under a predictive-maintenance model.',
    ],
  },
  {
    name: 'Automation Cell Design — SolidWorks, PLC & HMI/SCADA',
    status: 'CONCEPT',
    description:
      'An end-to-end automation cell build: SolidWorks-modeled fixtures and tooling paired with a PLC-driven HMI/SCADA interface for line operators.',
    stack: ['SolidWorks', 'PLC Programming', 'HMI', 'SCADA', 'System Integration'],
    details: [
      'Models the full automation-integrator workflow from 14 years on factory floors: 3D fixture and jig design in SolidWorks, PLC ladder logic for machine control, and an HMI/SCADA screen for operators.',
      'SCADA/HMI layer surfaces machine status, alarms, and cycle counts in real time, mirroring the operator panels designed at Testech, Jan David Technologies, and Denso Ten.',
      'SolidWorks assemblies define tolerances and mechanical interfaces before fixtures reach the shop floor, cutting rework and design-to-build time.',
      'Ties mechanical design directly to the control layer — the same bridge between CAD and software that runs through the rest of this career.',
    ],
  },
  {
    name: 'Vision-Based Quality Inspector',
    status: 'LIVE',
    description:
      'An OpenCV/PyTorch defect-detection prototype for automated assembly-line quality control.',
    stack: ['Python', 'OpenCV', 'PyTorch', 'FastAPI', 'React', 'Computer Vision'],
    repoUrl: 'https://github.com/Calijace2023/vision-quality-inspector',
    details: [
      'A small PyTorch CNN trained on OpenCV-generated synthetic part images, classifying OK vs. defective (scratch, pit, crack, discoloration).',
      'FastAPI serves predictions plus a classical Canny edge-map diagnostic; a React UI lets a visitor generate a sample or upload their own image.',
      'Flags out-of-spec parts in real time, extending the inspection systems built at Denso Ten.',
    ],
  },
  {
    name: 'Predictive Maintenance Pipeline',
    status: 'LIVE',
    description:
      'A scikit-learn model estimating remaining useful life from live sensor telemetry, served through FastAPI to a real-time React dashboard.',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'React', 'WebSockets'],
    repoUrl: 'https://github.com/Calijace2023/predictive-maintenance-pipeline',
    details: [
      'A RandomForestRegressor predicts remaining useful life (RUL) from sliding-window features over vibration, temperature, and pressure telemetry.',
      'A live simulation runs a small machine fleet through synthetic run-to-failure cycles, broadcasting updated predictions over a WebSocket as each machine ages toward failure.',
      'Directly implements the predictive-maintenance backend work referenced from Denso Ten — the piece of that experience the rest of this portfolio only described until now.',
    ],
  },
]

export const miniProjects: Project[] = [
  {
    name: 'Automated Engineering Reporting Bot',
    status: 'LIVE',
    description:
      'A Python CLI tool that turns raw CSV/Excel production data into formatted SPC-style quality reports.',
    stack: ['Python', 'Pandas', 'Jinja2', 'Automation'],
    repoUrl: 'https://github.com/Calijace2023/engineering-reporting-bot',
    details: [
      'Computes Cp/Cpk process capability, defect rate, yield, and downtime per machine from a shift/production log.',
      'Renders a self-contained, print-friendly HTML report — no server needed to view it.',
      'Replaces the manual reporting process referenced across multiple manufacturing roles.',
    ],
  },
  {
    name: 'Python Projects — OOP Principles',
    status: 'LIVE',
    description:
      'A set of Python exercises demonstrating core object-oriented programming principles.',
    stack: ['Python', 'OOP'],
    repoUrl: 'https://github.com/Calijace2023/Python-Projects',
    details: [
      'Covers encapsulation, inheritance, polymorphism, and abstraction with worked examples.',
      'Written as a reference set for clean, class-based Python design.',
    ],
  },
  {
    name: 'Python Projects — Vendo Machine',
    status: 'LIVE',
    description:
      'A Python simulation of a vending machine, modeling real-world state and transaction logic.',
    stack: ['Python', 'OOP', 'State Machines'],
    repoUrl: 'https://github.com/Calijace2023/Python-Projects',
    details: [
      'Models inventory, payment, and change-dispensing logic as a class-based state machine.',
      'Applies OOP fundamentals to a practical, testable scenario.',
    ],
  },
]
