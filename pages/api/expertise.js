const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'Jira and Trello',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
    {
        id: 5,
        title: 'Agile Process Enthusiast',
        desc: "I have extensive experience working within Agile frameworks, which has enabled me to deliver high-quality software in a collaborative and iterative manner. Embracing Agile methodologies such as Scrum and Kanban, I actively participate in sprint planning, daily stand-ups, and retrospectives. This approach not only improves efficiency and adaptability but also ensures continuous improvement and customer satisfaction. I value the transparency and teamwork inherent in Agile processes and am committed to leveraging these practices to drive successful project outcomes."
    },
    {
        id: 6,
        title: 'DevOps Advocate',
        desc: "DevOps is a crucial aspect of modern software development, and I am passionate about integrating development and operations to streamline workflows and enhance productivity. With a strong background in continuous integration and continuous deployment (CI/CD), I automate build, test, and deployment processes to ensure rapid and reliable delivery of software. My experience with tools such as Jenkins, Docker, Kubernetes, and AWS enables me to manage infrastructure as code and monitor systems effectively. I am dedicated to fostering a culture of collaboration and continuous improvement, bridging the gap between development and operations to achieve seamless delivery and operational excellence."
    },
    {
        id: 7,
        title: 'Freelance Developer',
        desc: "As a freelance developer, I have honed my ability to manage multiple projects and deliver high-quality solutions to clients from various industries. This experience has equipped me with strong project management skills, the ability to work independently, and the flexibility to adapt to diverse client needs. I excel in identifying client requirements, proposing effective solutions, and delivering projects on time and within budget. My freelance work spans frontend and backend development, allowing me to continuously expand my skill set and stay current with the latest technologies and industry trends."
    },
    {
        id: 8,
        title: 'Continuous Learner of Emerging Technologies',
        desc: "I am passionate about staying at the forefront of technology by continuously learning and mastering new skills. Recently, I have focused on expanding my expertise in GoLang, NestJS, Flutter, Tauri, and Google AI and Machine Learning. This commitment to ongoing education enables me to build efficient, scalable, and innovative solutions. By integrating these cutting-edge technologies into my projects, I ensure that my work is not only current but also anticipates future trends and industry demands. My proactive approach to learning helps me to solve complex problems and deliver high-impact results."
    }
    
    
    
    
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
