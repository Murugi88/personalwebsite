document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Greeting
    updateGreeting();
    
    // Theme Toggle
    setupThemeToggle();
    
    // Navigation and Scrollspy
    setupNavigation();
    
    // Projects Filter and Modal
    setupProjects();
    
    // Blog Posts
    loadBlogPosts();
    
    // Form Validation
    validateForm();
});

// 1. Dynamic Greeting
function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById('greeting');
    let message;
    
    if (hour < 12) message = "Good Morning!";
    else if (hour < 18) message = "Good Afternoon!";
    else message = "Good Evening!";
    
    greeting.textContent = message;
}

// 2. Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(savedTheme);
    themeToggle.checked = savedTheme === 'dark';

    // Toggle theme
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

// 3. Navigation and Scrollspy
function setupNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

// 4. Projects with Filter and Modal
function setupProjects() {
    // Projects data array
    const projects = [
        {
            id: 1,
            title: "Login Form",
            category: "web",
            image: "logi.png",
            description: "A fully responsive Sign Up form with Validation.",
            liveUrl: "#",
            codeUrl: "#"
        },
        {
            id: 2,
            title: "Visually enhanced Tables",
            category: "data",
            image: "table.png",
            description: "Interactive dashboard with quality table design.",
            liveUrl: "#",
            codeUrl: "#"
        },
        {
            id: 3,
            title: "Library System",
            category: "web",
            image: "lib.png",
            description: "Book processing and managing system.",
            liveUrl: "#",
            codeUrl: "#"
        },
        {
            id: 4,
            title: "Portfolio Project",
            category: "web",
            image: "port1.png",
            description: "Customizable portfolio template for creatives with dark/light mode and project filtering.",
            liveUrl: "#",
            codeUrl: "#"
        },
        {
            id: 5,
            title: "Artificial",
            category: "ai",
            image: "usiu.png",
            description: "Customizable portfolio template for creatives with dark/light mode and project filtering.",
            liveUrl: "#",
            codeUrl: "#"
        }
    ];

    // Render projects
    renderProjects(projects);

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            const filter = button.dataset.filter;
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.dataset.category = project.category;
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 100)}...</p>
                <button class="view-btn" data-id="${project.id}">View Details</button>
            </div>
        `;
        
        container.appendChild(projectCard);
    });

    // Add event listeners to view buttons
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = parseInt(e.target.dataset.id);
            openProjectModal(projectId);
        });
    });
}

function openProjectModal(projectId) {
    // In a real app, you would fetch the project data
    // For now, we'll use a simple find from our array
    const projects = [
        {
            id: 1,
            title: "LogIn Form",
            category: "web",
            image: "logi.png",
            description: "A fully responsive Sign Up form with Validation.",
            liveUrl: "https://Murugi88.github.io/js-regex-validation_Mitchelle_Murugi",
            codeUrl: "#"
        },
        {
            id: 2,
            title: "Visually Enhanced Table",
            category: "data",
            image: "table.png",
            description: "Interactive dashboard with quality table design.",
            liveUrl: "https://Murugi88.github.io/premiertable",
            codeUrl: "#"
        },
        {
            id: 3,
            title: "Library System",
            category: "web",
            image: "lib.png",
            description: "Book processing and managing system.",
            liveUrl: "https://Murugi88.github.io/library",
            codeUrl: "#"
        },
        {
            id: 4,
            title: "Portfolio Template",
            category: "web",
            image: "port1.png",
            description: "Customizable portfolio template for creatives with dark/light mode and project filtering. Built with pure HTML, CSS, and JavaScript. Easy to deploy and modify with minimal coding knowledge required.",
            liveUrl: "https://Murugi88.github.io/personalwebsite",
            codeUrl: "#"
        },
        {
            id: 5,
            title: "Deepseek V Chat",
            category: "ai",
            image: "usiu.png",
            description: "Customizable Models.",
            liveUrl: "#",
            codeUrl: "#"
        }
    ];

    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-image').alt = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-live').href = project.liveUrl;
    document.getElementById('modal-code').href = project.codeUrl;

    modal.style.display = 'block';
}

// 5. Blog Posts
function loadBlogPosts() {
    // Blog data array
    const blogPosts = [
        {
            title: "Getting Started with React Hooks",
            date: "May 15, 2023",
            excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
            content: "Full article content would go here...",
            tags: ["react", "javascript", "web"]
        },
        {
            title: "CSS Grid vs Flexbox",
            date: "April 2, 2023",
            excerpt: "When to use CSS Grid and when to stick with Flexbox for your layouts.",
            content: "Full article content would go here...",
            tags: ["css", "web", "design"]
        },
        {
            title: "Introduction to Machine Learning",
            date: "March 10, 2023",
            excerpt: "A beginner's guide to understanding machine learning concepts and algorithms.",
            content: "Full article content would go here...",
            tags: ["ai", "data", "python"]
        }
    ];

    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = '';

    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-post';
        article.innerHTML = `
            <h3>${post.title}</h3>
            <p class="date">${post.date}</p>
            <p>${post.excerpt}</p>
            <a href="#" class="read-more">Read more</a>
        `;
        blogContainer.appendChild(article);
    });
}

// 6. Form Validation
function validateForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    form.addEventListener('submit', function(e) {
        let isValid = true;
        
        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });
        
        // Validate email format
        if (!emailRegex.test(email.value)) {
            email.classList.add('error');
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            email.classList.remove('error');
            emailError.textContent = '';
        }
        
        if (!isValid) {
            e.preventDefault();
        } else {
            // In a real app, you would submit the form here
            alert('Form submitted successfully!');
            form.reset();
            e.preventDefault();
        }
    });
    
    // Real-time validation
    email.addEventListener('input', () => {
        if (emailRegex.test(email.value)) {
            email.classList.remove('error');
            emailError.textContent = '';
        }
    });
}

// Add this to your existing code
function setupSkills() {
    const skillsData = [
        { name: "HTML5", icon: "fab fa-html5", percent: 90 },
        { name: "CSS3", icon: "fab fa-css3-alt", percent: 85 },
        { name: "JavaScript", icon: "fab fa-js", percent: 80 },
        { name: "React", icon: "fab fa-react", percent: 75 },
        { name: "Node.js", icon: "fab fa-node-js", percent: 70 },
        { name: "MongoDB", icon: "fas fa-database", percent: 65 }
    ];

    const skillsContainer = document.querySelector('.skills-container');
    
    // Create skill elements
    skillsData.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <div class="skill-header">
                <i class="${skill.icon} skill-icon"></i>
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percent">0%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-percent="${skill.percent}"></div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });

    // Animate skills when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const aboutSection = document.getElementById('about');
    observer.observe(aboutSection);
}

function animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        const percentDisplay = bar.closest('.skill-item').querySelector('.skill-percent');
        
        let currentPercent = 0;
        const interval = setInterval(() => {
            if (currentPercent >= percent) {
                clearInterval(interval);
            } else {
                currentPercent++;
                bar.style.width = `${currentPercent}%`;
                percentDisplay.textContent = `${currentPercent}%`;
            }
        }, 20);
    });
}

// Add this to your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    setupSkills();
});
