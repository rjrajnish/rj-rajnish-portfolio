const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Dr. APJ Abdul Kalam Technical University,Lucknow',
                degree: 'MCA, Computer Applications and Science',
                detail: "Completed  MCA with web development, python programming .database management and computer applications",
                year: '2018-2021'
            },

            {
                id: 1,
                title: 'Chhatrapati Sahuji Maharaj University ,Kanpur',
                degree: 'B.Sc, Science & Mathmetics',
                detail: "Completed B.Sc. from Physics, chemistry and Mathemetics",
                year: '2014-2017'
            },
            {
                id: 2,
                title: 'Gopal Saraswati Vidhya Mandir Highschool and intermediate Collage,Raebareli',
                degree: '10+2',
                detail: "Physics, Mathemetics and Chemistry, UP Board Allahabad ,Utter Pradesh",
                year: '2012-2014'
            },

        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Wiseneosco India Pvt. Ltd',
                role: 'Full Stack Developer',
                url: 'https://www.wiseneoscoindia.com/',
                desc: 'As a Full Stack Developer at Wiseneosco India Pvt Ltd, you develop and maintain both front-end and back-end components of web applications.my responsibilities include creating user interfaces, writing server-side logic, managing databases, and integrating APIs.',
                year: '03/2023 - Present',
                location: 'Gr. noida, India'
            },
            {
                id: 2,
                title: 'ByPeoples Technologies Pvt. Ltd',
                role: 'React Developer',
                url: 'https://bypeopletechnologies.com/',
                desc: 'As a React developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '04/2022 - 03/2023',
                location: 'Ahamdabad, India'
            }



        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
