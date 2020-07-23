(function(){
    const reviewerName = document.querySelector("reviewer_name");
    const reviewerImage = document.querySelector("reviewer_image");
    const reviewerTestimonial = document.querySelector("reviewer_testimonial");
    const testimonialButton = document.querySelectorAll(".btn");

    //constructor
    function Reviewer(name, image, testimonial) {
        this.name = name
        this.image = image
        this.testimonial = testimonial
    }
})()