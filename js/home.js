/*=========================================================================
 * Modals
 *=========================================================================*/
// Get the modal
var modal = document.getElementById('myModal');
var warningModal = document.getElementById('warningModal');
var warningButtonDiscard = document.getElementById('warningButtonDiscard');
var warningButtonCancel = document.getElementById('warningButtonCancel');
// Get the button that opens the modal
var btn = document.getElementById("task_modal");
// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal 
btn.onclick = function () {
   modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
close.onclick = function () {
   var textInInput = document.getElementById('taskName');
   if (textInInput.value != "") {
      warningModal.style.display = 'block';
   } else {
      modal.style.display = "none";
   }
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
      var textInInput = document.getElementById('taskName');
      if (textInInput.value != "") {
         warningModal.style.display = 'block';
      } else {
         modal.style.display = "none";
      }
   }
};

warningButtonDiscard.onclick = function () {
   var textInInput = document.getElementById('taskName');
   warningModal.style.display = "none";
   textInInput.value = "";
   modal.style.display = "none";
};

warningButtonCancel.onclick = function () {
   warningModal.style.display = "none";
};
/*=========================================================================
 * Projects
 *=========================================================================*/
var projectNames = ['Personal', 'Shopping', 'Work', 'Home'];
var projectColors = ['brown', 'cornflowerblue', 'blueviolet', 'aqua'];

var projectDiv = document.getElementById('project');
var projectUl = document.querySelector('#project ul');
var projectHeadIcon = document.querySelector('#project_head i:first-child');
var projectIsOpen = false;
projectUl.style.display = 'none';
var allProjectsAppended = false;

projectDiv.addEventListener("click", function (event) {
   //actions performed when Project is Open
   if (projectIsOpen) {
      projectHeadIcon.classList.remove('fa-chevron-circle-up');
      projectHeadIcon.classList.add('fa-chevron-circle-down');
      projectUl.style.display = 'none';
      projectIsOpen = false;
   } else { //actions performed when Project is Close
      projectHeadIcon.classList.remove('fa-chevron-circle-down');
      projectHeadIcon.classList.add('fa-chevron-circle-up');
      projectUl.style.display = 'block';

      if (!allProjectsAppended) {
         createProjects(projectNames, projectColors);
         allProjectsAppended = true;
      }

      projectIsOpen = true;
   }

});

function createProjects(projectArray, colorArray) {
   var projectColorArray = 0;
   while (projectUl.firstChild) {
      projectUl.removeChild(projectUl.firstChild);
   }
   projectArray.forEach(projectName => {
      var ulLi = document.createElement('li');
      var liSpan1 = document.createElement('span');
      var liSpan2 = document.createElement('span');
      var liI = document.createElement('i');

      liSpan1.className = 'big_dot';
      liSpan1.style.background = colorArray[projectColorArray];
      liSpan2.className = 'gap';
      liSpan2.innerHTML = projectName;
      liI.className = 'fas fa-times gap_right project_close';
      liI.style.cssFloat = 'right';

      ulLi.appendChild(liSpan1);
      ulLi.appendChild(liSpan2);
      ulLi.appendChild(liI);
      projectUl.appendChild(ulLi);

      projectColorArray++;
   });
}

