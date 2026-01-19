const experiences = [
    {
        id: 1,
        title: "Sky Dreams",
        description: "Float among clouds and discover endless horizons",
        category: "nature",
        image: "https://res.cloudinary.com/dxpshbh1u/image/upload/v1768656318/Rectangle_panlbq.png"
    },
    {
        id: 2,
        title: "Sunset Horizons",
        description: "Experience breathtaking desert landscapes at dusk",
        category: "nature",
        image: "https://res.cloudinary.com/dxpshbh1u/image/upload/v1768656345/Rectangle_Copy_ofoh2z.png"
    },
    {
        id: 3,
        title: "Forest Escape",
        description: "Immerse in ancient woodland serenity",
        category: "nature",
        image: "https://res.cloudinary.com/dxpshbh1u/image/upload/v1768656588/Rectangle_Copy_5_b0qznz.png"
    },
    {
        id: 4,
        title: "Highland Views",
        description: "Discover majestic peaks and rolling valleys",
        category: "adventure",
        image: "https://res.cloudinary.com/dxpshbh1u/image/upload/v1768656482/Rectangle_Copy_6_e9yuzh.png"
    },
    {
        id: 5,
        title: "Street Bites",
        description: "Savor authentic local flavors and traditions",
        category: "food",
        image: "https://res.cloudinary.com/dxpshbh1u/image/upload/v1768656450/Rectangle_Copy_2_bwf2yg.png"
    },
    {
        id: 6,
        title: "Feast Experience",
        description: "Indulge in curated culinary masterpieces",
        category: "food",
        image: "https://res.cloudinary.com/dxpshbh1u/image/upload/v1768656414/Rectangle_Copy_3_bxdrgx.png"
    },
    {
        id: 7,
        title: "Open Roads",
        description: "Journey through stunning scenic routes",
        category: "adventure",
        image: "https://res.cloudinary.com/dxpshbh1u/image/upload/v1768656382/Rectangle_Copy_4_vkqoyj.png"
    },
    {
        id: 8,
        title: "Lakeside Calm",
        description: "Find tranquility by pristine waters",
        category: "nature",
        image: "https://res.cloudinary.com/dxpshbh1u/image/upload/v1768656622/Rectangle_Copy_11_dk191k.png"
    },
    {
        id: 9,
        title: "Kibera Tour",
        description: "Cultural exploration and authentic connections",
        category: "culture",
        image: "https://res.cloudinary.com/dxpshbh1u/image/upload/v1768656656/Group_4_nvn8lu.png"
    }
];

let currentFilter = 'all';

function renderExperiences(filter = 'all', search = '') {
    const grid = document.getElementById('experienceGrid');
    let filtered = experiences;

    if (filter !== 'all') {
        filtered = experiences.filter(exp => exp.category === filter);
    }

    if (search) {
        filtered = filtered.filter(exp => 
            exp.title.toLowerCase().includes(search.toLowerCase()) ||
            exp.description.toLowerCase().includes(search.toLowerCase())
        );
    }

    grid.innerHTML = filtered.map((exp, index) => `
        <div class="experience-card card-${index + 1}" onclick="openBooking('${exp.title}')">
            <img src="${exp.image}" alt="${exp.title}" class="card-image">
            <div class="card-overlay">
                <h3 class="card-title">${exp.title}</h3>
                <p class="card-description">${exp.description}</p>
            </div>
        </div>
    `).join('');
}

function filterExperiences(category) {
    currentFilter = category;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderExperiences(category, document.getElementById('searchInput').value);
}

function searchExperiences() {
    const search = document.getElementById('searchInput').value;
    renderExperiences(currentFilter, search);
}

function openBooking(title) {
    document.getElementById('modalTitle').textContent = `Book: ${title}`;
    document.getElementById('bookingModal').classList.add('active');
}

function showBookingModal() {
    document.getElementById('modalTitle').textContent = 'Plan Your Adventure';
    document.getElementById('bookingModal').classList.add('active');
}

function closeModal() {
    document.getElementById('bookingModal').classList.remove('active');
}

function submitBooking(e) {
    e.preventDefault();
    alert('Thank you for your booking! We will contact you shortly to confirm your adventure.');
    closeModal();
    e.target.reset();
}

document.getElementById('searchInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchExperiences();
    }
});

renderExperiences();