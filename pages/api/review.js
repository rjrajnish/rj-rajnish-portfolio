const review = [
    {
        id: 0,
        clientName: 'Hyundai India',
        clientLocation: 'Gurgram',
        clientSource: 'Hyundaiexplorers.com',
        clientReview: 'The development work done for Hyundai Explorers was top-notch. His understanding of the automotive industry requirements and execution was impressive.'
    },
    {
        id: 1,
        clientName: 'Sumit Vajpai',
        clientLocation: 'Noida',
        clientSource: 'Laptopex.com',
        clientReview: 'Working with him on the Laptopex project was a great experience. His attention to detail and expertise were invaluable. Highly recommended!'
    },
    {
        id: 2,
        clientName: 'Prashant Kapoor',
        clientLocation: 'Gurgram',
        clientSource: 'Astrokapoor.com',
        clientReview: 'His work on the Astrokapoor project was outstanding. His skills and professionalism exceeded our expectations. Looking forward to future projects together.'
    },
  
]
export default function handler(req, res) {
    res.status(200).json(review)
}
