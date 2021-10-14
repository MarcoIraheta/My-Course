const  courseNameInput = document.querySelector('#input-course-name');
const  courseRatingInput = document.querySelector('#input-course-rating');
const  addBtn = document.querySelector('#btn-add');
const  courseList = document.querySelector('#course-list');

addBtn.addEventListener('click', () => {
  const enteredCourseName  =  courseNameInput.value;
  const enteredCourseRating = courseRatingInput.value;

  if (
    enteredCourseName.trim().lenght <=0 ||
    enteredCourseRating.trim().lenght <=0  ||
    enteredCourseRating < 1 ||
    enteredCourseRating > 5 
     ){
      const alert = document.createElement('ion-alert');
      alert.header = 'Invalid Input';
      alert.message = 'Please enter a valid course name and rating';
      alert.buttons = ['Okay'];
      document.body.appendChild(alert);
      alert.present();

     }
     {
       return;
     }

  const newItem = document.createElement('ion-item');
  newItem.innerHTML = `<strong>${enteredCourseName}:</strong>&nbsp; ${enteredCourseRating}/5`;   


  courseList.appendChild(newItem);

  courseNameInput.value = '';
  courseRatingInput.value ='';
})