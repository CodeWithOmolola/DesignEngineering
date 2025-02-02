// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#000000' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 6
        }
    }
});


setTimeout(() => {
    document.getElementById('particles-js').style.display = 'none';
}, 0);

// Chicago time
function updateChicagoTime() {
    const options = {
        timeZone: 'America/Chicago',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('chicago-time').textContent = 
        new Date().toLocaleTimeString('en-US', options) + ' ';
}
setInterval(updateChicagoTime, 1000);
updateChicagoTime();

// Image preview on hover
const boxes = document.querySelectorAll('.box');
const imagePreview = document.querySelector('.image-preview');

if (boxes.length > 0 && imagePreview) {
    imagePreview.style.backgroundImage = `url(${boxes[0].dataset.image})`;
}

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        const imageUrl = box.dataset.image;
        imagePreview.style.backgroundImage = `url(${imageUrl})`;
    });
});

// Scroll animation
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Modal functionality
function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const hiddenContent = document.getElementById(`${projectId}-content`);

    modalContent.innerHTML = '<span class="close" onclick="closeModal()">&times;</span>';

    if (hiddenContent) {
        const clone = hiddenContent.cloneNode(true);
        clone.style.display = 'block';
        modalContent.appendChild(clone);
    }

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Gallery functionality
function initializeGalleries() {
    const galleries = document.querySelectorAll('.project-gallery');
    
    galleries.forEach(gallery => {
        const container = gallery.querySelector('.gallery-container');
        const mediaElements = container.querySelectorAll('.gallery-image, video');
        const dotsContainer = gallery.querySelector('.gallery-dots');
        
        
        dotsContainer.innerHTML = '';
        

        if (mediaElements.length > 0) {
            mediaElements[0].classList.add('active');
        }
        
  
        mediaElements.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => showSlide(index, container));
            dotsContainer.appendChild(dot);
        });
        
       
        const prevBtn = gallery.querySelector('.prev-btn');
        const nextBtn = gallery.querySelector('.next-btn');
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => moveSlide(-1, container));
            nextBtn.addEventListener('click', () => moveSlide(1, container));
        }
    });
}

function moveSlide(direction, container) {
    const mediaElements = container.querySelectorAll('.gallery-image, video');
    let currentIndex = Array.from(mediaElements).findIndex(el => el.classList.contains('active'));
    
   
    const currentElement = mediaElements[currentIndex];
    if (currentElement.tagName === 'VIDEO') {
        currentElement.pause();
    }

    currentIndex += direction;
    
    if (currentIndex >= mediaElements.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = mediaElements.length - 1;
    
    showSlide(currentIndex, container);
}

function showSlide(index, container) {
    const mediaElements = container.querySelectorAll('.gallery-image, video');
    const dots = container.querySelectorAll('.dot');
    
  
    mediaElements.forEach(el => {
        el.classList.remove('active');
        if (el.tagName === 'VIDEO') {
            el.pause();
        }
    });
    
  
    mediaElements[index].classList.add('active');

    
    function showSlide(index, container) {
        const mediaElements = container.querySelectorAll('.gallery-image, video');
        const dots = container.querySelectorAll('.dot');
    
        
        mediaElements.forEach(el => {
            el.classList.remove('active');
            if (el.tagName === 'VIDEO') {
                el.pause(); // Pause the video when it's not active
            }
        });
    
   
        mediaElements[index].classList.add('active');
    
        
        if (mediaElements[index].tagName === 'VIDEO') {
            mediaElements[index].play();
        }
    
      
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
 
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    updateChicagoTime();
    initializeGalleries();
});

const boxes = document.querySelectorAll('.box');
const imagePreview = document.querySelector('.image-preview');

if (boxes.length > 0 && imagePreview) {
    imagePreview.style.backgroundImage = `url(${boxes[0].dataset.image})`;
}

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        updateImagePreview(box);
    });

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        updateImagePreview(box);
    });
});

function updateImagePreview(box) {
    const imageUrl = box.dataset.image;
    if (imagePreview && imageUrl) {
        imagePreview.style.backgroundImage = `url(${imageUrl})`;
    }
}
