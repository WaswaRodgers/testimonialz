(function(){
    const reviewerName = document.querySelector("reviewer_name");
    const reviewerImage = document.querySelector("reviewer_image");
    const reviewerTestimonial = document.querySelector("reviewer_testimonial");
    const testimonialButton = document.querySelectorAll(".btn");
    let index = 0;
    const reviewers = [];

    //constructor
    class Reviewer {
        constructor(name, image, testimonial) {
            this.name = name;
            this.image = image;
            this.testimonial = testimonial;
        }
    }

    //create new reviewer
    function addReviewer(name, image, testimonial) {
        let reviewer_Image = `../images/reviewer-${image}.jpg`;
        let reviewer = new Reviewer(name, reviewer_Image, testimonial);
        reviewers.push(reviewer);
    }

    addReviewer(0, 'Wafula James', 'Mimi kama James, nasema kwamba nafurahishwa na hatua ya Wanasayansi kushughulikia janga hili la Corona')
    addReviewer(1, 'Mukoyani Rodgers', 'Kenya is a country that has many professionals locally and globally. Happy to be a Kenyan!')
    addReviewer(2, 'Sitati Geoffrey', 'Many girls have undergone Female Genital Mutilation in Sub-saharan Africa. As Kenyans of good-will, we can end this menace.')
    addReviewer(3, 'Samita Andrew', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    addReviewer(4, 'Ouma Linet', 'Mimi ni msichana Mjaka kutoka Homabay. Kwa kweli naipenda nchi yangu, na sitaiacha kamwe. Kenya ni yangu milele.')
    

    testimonialButton.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
               if(index === 0){
                    index = customers.length
               }
               index--
               customerImage.src = customers[index].img
               customerName.textContent = customers[index].name
               customerText.textContent = customers[index].text
            }
            if (e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                     index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
             }
        })
    })
})()