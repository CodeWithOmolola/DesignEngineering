const processItems = document.querySelectorAll('.process-item');
        
processItems.forEach(item => {
    const header = item.querySelector('.process-header');
    
    header.addEventListener('click', () => {
      
        item.classList.toggle('active');
        
       
        processItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});


const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('click', () => {

        member.classList.toggle('active');
    });
});